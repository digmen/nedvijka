import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './adminstyle.css';

function AdmiPage() {
  const isPageAdmin = localStorage.getItem('superUser') === 'true';

  const [type, setType] = useState();
  const [address, setAddress] = useState('');
  const [square, setSquare] = useState('');
  const [price, setPrice] = useState('');
  const [room_count, setRoomCount] = useState('');
  const [series, setSeries] = useState();
  const [floorone, setFloorOne] = useState();
  const [floortwo, setFloorTwo] = useState();
  const [communications, setCommunications] = useState('');
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [best, setBest] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const refreshAccessToken = async () => {
    try {
      const refreshData = {
        refresh: localStorage.getItem('adminRefresh'),
      };
      const refreshResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/token/refresh/',
        refreshData
      );
      if (refreshResponse.status >= 200 && refreshResponse.status < 300) {
      } else {
        throw new Error('Ошибка обновления токена');
      }
    } catch (error) {
      alert('Ошибка соединения');
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(files[i]);
      urls.push(url);
    }

    setSelectedFiles([...files]);
    setPreviewUrls(urls);
  };

  const handleSubmitAdmin = async (e) => {
    e.preventDefault();

    await refreshAccessToken();

    try {
      const floorData = {
        title: `${floorone} из ${floortwo}`,
      };
      const floorResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/floor/apartment/',
        floorData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );
      const region = '0';
      const regionData = {
        name: region,
      };
      const regionResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/region/',
        regionData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );
      const typeData = {
        title: type,
      };
      const typeResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/types/apartments/',
        typeData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );
      const documentData = {
        title: document,
      };
      const documentResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/document/apartment/',
        documentData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );
      const seriesData = {
        title: series,
      };
      const seriesResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/series/apartment/',
        seriesData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );
      const name = 0;
      const currencyData = {
        symbol: '$',
        name: name,
      };
      const currencyResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/currency/',
        currencyData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );

      const seriesId = seriesResponse.data.id;
      const currencyId = currencyResponse.data.id;
      const documentId = documentResponse.data.id;
      const typeId = typeResponse.data.id;
      const regionId = regionResponse.data.id;
      const floorId = floorResponse.data.id;
      const localIdAuthor = localStorage.getItem('id');

      const data = {
        type: typeId,
        address: address,
        region: regionId,
        square: square,
        price: price,
        room_count: room_count,
        floor: floorId,
        communications: communications,
        document: documentId,
        description: description,
        title: title,
        best: best,
        lat: '0',
        lng: '0',
        author: localIdAuthor,
        currency: currencyId,
        series: seriesId,
      };

      const apartmentResponse = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/apartment/',
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
            'X-Refresh-Token': localStorage.getItem('adminRefresh'),
          },
        }
      );

      const apartmentId = apartmentResponse.data.id;

      if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
          const formData = new FormData();
          formData.append('apartment', apartmentId);
          formData.append('image', selectedFiles[i]);

          await axios.post(
            'https://vm4506017.43ssd.had.wf/api/image/apartments/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
              },
            }
          );
        }
      } else {
        alert('Добавьте фото');
      }
      if ((apartmentResponse.status = 200)) {
        alert('Успешно добавлено');
      }
    } catch (error) {
      console.log('Ошибка', error);
    }
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = 'https://vm4506017.43ssd.had.wf/api/users/';

    try {
      const response = await axios.get(url);
      const usersArray = response.data.results; // Получаем массив пользователей из свойства "results"
      setUsers(usersArray);
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  }

  async function handleCheckboxChange(id, checked) {
    try {
      const userToUpdate = users.find((user) => user.id === id);

      if (!userToUpdate) return;

      const updatedUser = {
        ...userToUpdate,
        is_superuser: checked,
        is_staff: checked,
      };
      setUsers((prevUsers) => {
        return prevUsers.map((user) => (user.id === id ? updatedUser : user));
      });

      const url = `https://vm4506017.43ssd.had.wf/api/users/${id}/`;
      await axios.patch(url, updatedUser);
    } catch (error) {
      console.error('Ошибка при изменении состояния:', error.message);
    }
  }

  return (
    <div>
      {isPageAdmin ? (
        <>
          <div className="container_admin">
            <h1
              style={{
                marginTop: '40px',
                fontSize: '48px',
              }}
            >
              Админ панель
            </h1>

            <form onSubmit={handleSubmitAdmin} className="admin_form">
              <span>Выберите тип недвижимости</span>
              <select
                style={{ maxWidth: '500px', minHeight: '40px' }}
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option>Выберите тип</option>
                <option value="дом">Дом</option>
                <option value="участок">Участок</option>
                <option value="коммерция">Коммерция</option>
                <option value="квартира">Квартира</option>
              </select>
              <span>Адрес недвижимости</span>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Адрес"
              />
              <span>Квадратура недвижимости</span>
              <input
                onChange={(e) => setSquare(e.target.value)}
                value={square}
                placeholder="Напишите квадратуру м2"
                type="number"
              />
              <span>Цену недвижимости</span>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Цена"
                type="number"
              />
              <span>Количество комнат</span>
              <input
                onChange={(e) => setRoomCount(e.target.value)}
                value={room_count}
                placeholder="Напишите количество комнат"
                type="number"
              />
              <span>Состояние недвижимости</span>
              <input
                onChange={(e) => setSeries(e.target.value)}
                value={series}
                placeholder="Состояние"
                type="text"
              />
              <span>Напишите на каком этаже помещение</span>
              <div className="floor_container">
                <input
                  type="number"
                  onChange={(e) => setFloorOne(e.target.value)}
                  value={floorone}
                  className="inp_floor"
                />
                <span>из</span>
                <input
                  type="number"
                  onChange={(e) => setFloorTwo(e.target.value)}
                  value={floortwo}
                  className="inp_floor"
                />
              </div>
              <span>Номер телефона для связи</span>
              <input
                onChange={(e) => setCommunications(e.target.value)}
                value={communications}
                placeholder="Напишите телефон для связи"
                type="number"
              />
              <span>Тип документа недвижимости</span>
              <input
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                placeholder="Тип документа"
                type="text"
              />
              <span>Описание недвижимости</span>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="inp_description"
                placeholder="Напишите описание"
                type="text"
                value={description}
              />
              <span>Заголовк недвижимости</span>
              <input
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Заголовок"
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Добавить продукт в рекомендованые</span>
                <input
                  type="checkbox"
                  onChange={(e) => setBest(e.target.checked)}
                  checked={best}
                  className="best_admin_inp"
                />
              </div>

              <input
                style={{ border: 'none' }}
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {previewUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </div>
              <button>Добавить</button>
            </form>
          </div>
          <div className="container_admin_add">
            <h2>Список пользователей</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <label className="lbl_add_admin">
                    {user.login}
                    <input
                      className="inp_add_admin"
                      type="checkbox"
                      checked={user.is_superuser && user.is_staff}
                      onChange={(e) =>
                        handleCheckboxChange(user.id, e.target.checked)
                      }
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h1 className="not_found">Страница не найдена</h1>
      )}
    </div>
  );
}

export default AdmiPage;
