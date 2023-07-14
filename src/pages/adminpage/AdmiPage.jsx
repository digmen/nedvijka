import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './adminstyle.css';

function AdmiPage() {
  const isPageAdmin = localStorage.getItem('superUser') === 'true';

  const [type, setType] = useState();
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState();
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
  const [best, setBest] = useState();
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
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
      const formData = new FormData();

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('photos', selectedFiles[i]);
      }

      axios.post(
        'https://vm4506017.43ssd.had.wf/api/image/apartments/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
          },
        }
      );

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
      if (regionResponse.status >= 200 && regionResponse.status < 300) {
        console.log('успешно');
      } else {
        console.log('не заполнен регион');
      }

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

      if (currencyResponse.status >= 200 && currencyResponse.status < 300) {
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
          lat: lat,
          lng: lng,
          author: localIdAuthor,
          currency: currencyId,
          series: seriesId,
        };

        await axios.post(
          'https://vm4506017.43ssd.had.wf/api/apartment/',
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
              'X-Refresh-Token': localStorage.getItem('adminRefresh'),
            },
          }
        );

        alert('Данные успешно добавлены!');
      } else {
        alert('Ошибка добавления');
      }
    } catch (error) {
      alert('Ошибка соединения');
    }
  };

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
              <input
                onChange={(e) => setType(e.target.value)}
                value={type}
                placeholder="Тип"
              />
              <span>Адрес недвижимости</span>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Адрес"
              />
              <span>Регион недвижимости</span>
              <input
                onChange={(e) => setRegion(e.target.value)}
                value={region}
                placeholder="Регион"
                type="text"
              />
              <span>Квадратура недвижимости</span>
              <input
                onChange={(e) => setSquare(e.target.value)}
                value={square}
                placeholder="Напишите квадратуру м2"
              />
              <span>Цену недвижимости</span>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Цена"
              />
              <span>Количество комнат</span>
              <input
                onChange={(e) => setRoomCount(e.target.value)}
                value={room_count}
                placeholder="Напишите количество комнат"
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
              <span>Выберите тип недвижимости</span>
              <input
                type="checkbox"
                onChange={(e) => setBest(e.target.checked)}
                checked={best}
              />

              <input
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="let"
              />
              <input
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                placeholder="lng"
              />
              <span>Напишите валюту продажи недвижимости</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Цена"
              />
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
        </>
      ) : (
        <h1 className="not_found">Страница не найдена</h1>
      )}
    </div>
  );
}

export default AdmiPage;
