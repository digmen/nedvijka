import React from 'react';
import GridListWith from '../../components/Services';
import Bestbroduct from '../../components/Bestbroduct';
import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import '../../components/service.css';

function ServicesPage() {
  // дата для создание обращений обявлений
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitTel = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
    };

    try {
      const response = await axios.post(
        'https://vm4506017.43ssd.had.wf/api/ads/',
        data
      );
      if (response.status >= 200 && response.status < 300) {
        console.log('Данные отправлены');
      } else {
        console.error('Ошибка данныч');
      }
    } catch (error) {
      console.error('Ошибка соединения', error);
    }
  };
  return (
    <div style={{ margin: '0 auto', maxWidth: '1400px' }}>
      <GridListWith />
      <Bestbroduct />
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          justifyContent={'center'}
          display={'flex'}
          width={500}
          height={350}
          bgColor={'blackAlpha.100'}
          mt={20}
          borderRadius={5}
        >
          <form className="form_service" onSubmit={handleSubmitTel}>
            <Input
              type="text"
              value={name}
              required=""
              onChange={(e) => setName(e.target.value)}
              mb={5}
              placeholder="Имя"
              width={350}
              bgColor={'white'}
            />
            <Input
              mb={10}
              placeholder="Телфон"
              required=""
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              width={350}
              bgColor={'white'}
            />
            <button
              style={{
                backgroundColor: '#284F9A',
                padding: '7px',
                borderRadius: '5px',
                color: 'white',
              }}
            >
              Отправить
            </button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default ServicesPage;
