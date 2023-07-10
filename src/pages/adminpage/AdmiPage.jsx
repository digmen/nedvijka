import React from 'react';
import './adminstyle.css';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/const';
import { useEffect } from 'react';
import { useProductContext } from '../../contexts/ProductContext';

function AdmiPage() {
  const isPageAdmin = localStorage.getItem('superUser') === 'true';

  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('');
  const [square, setSquare] = useState('');
  const [price, setPrice] = useState('');
  const [room_count, setRoomCount] = useState('');
  const [series, setSeries] = useState('');
  const [floor, setFloor] = useState('');
  const [communications, setCommunications] = useState('');
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');

  const refresh = localStorage.getItem('adminRefresh');
  const access = localStorage.getItem('adminAccess');

  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    try {
      const refreshData = {
        refresh: localStorage.getItem('refresh'), // Получение данных refresh из localStorage или из другого источника
      };

      const data = {
        type: type,
        address: address,
        region: region,
        square: square,
        price: price,
        room_count: room_count,
        series: series,
        floor: floor,
        communications: communications,
        document: document,
        description: description,
        response: localStorage.getItem('adminAccess'), // Предоставление access в заголовке Authorization
        responseText: localStorage.getItem('adminRefresh'), // Предоставление refresh в заголовке X-Refresh-Token
      };

      const response = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/apartment/',
        data
      );

      if (response.status >= 200 && response.status < 300) {
        console.log('Второй POST-запрос выполнен успешно');
      } else {
        console.error('Ошибка добавления');
      }
    } catch (error) {
      console.error('Ошибка соединения', error);
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
              <input
                onChange={(e) => setType(e.target.value)}
                value={type}
                placeholder="Напишите тип жилья"
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Напишите адрес"
              />
              <input
                onChange={(e) => setRegion(e.target.value)}
                value={region}
                placeholder="Напишите в каком районе помещение"
              />
              <input
                onChange={(e) => setSquare(e.target.value)}
                value={square}
                placeholder="Напишите квадратуру"
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Напишите цену"
              />
              <input
                onChange={(e) => setRoomCount(e.target.value)}
                value={room_count}
                placeholder="Напишите количество комнат"
              />
              <input
                onChange={(e) => setSeries(e.target.value)}
                value={series}
                placeholder="Напишите состояние помещения"
              />
              <span>Напишите на каком этаже помещение</span>
              <div className="floor_container">
                <input
                  onChange={(e) => setFloor(e.target.value)}
                  value={floor}
                  className="inp_floor"
                />
                <span>из</span>
                <input
                  onChange={(e) => setFloor(e.target.value)}
                  value={floor}
                  className="inp_floor"
                />
              </div>
              <input
                onChange={(e) => setCommunications(e.target.value)}
                value={communications}
                placeholder="Напишите телефон для связи"
              />
              <input
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                placeholder="Напишите тип документа"
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="inp_description"
                placeholder="Напишите описание"
                type="text"
              />
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
