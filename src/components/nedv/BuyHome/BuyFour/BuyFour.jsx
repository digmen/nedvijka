import React from 'react';
import { Button, Input, Select } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const BuyFour = () => {
  return (
    <div className="buy">
      <div className="up">
        <div className="up1">
          <p>Тип недвижимости</p>
          <Select width={215} placeholder="Выбрать">
            <option value="option1">Дома и коттеджи</option>
            <option value="option2">Дачи</option>
            <option value="option3">Таунхаусы</option>
          </Select>
        </div>
        <div className="up2">
          <p>Стоимость, с</p>
          <Input htmlSize={11} width="auto" placeholder="От" />
          <Input htmlSize={11} width="auto" placeholder="До" />
        </div>
        <div className="up3">
          <p>Площадь участка, м2</p>
          <Input htmlSize={6} width="auto" placeholder="От" />
          <Input htmlSize={6} width="auto" placeholder="До" />
        </div>
        <div className="up4">
          <p>Район</p>
          <Select width={215} placeholder="Выбрать">
            <option value="option1">Ленинский</option>
            <option value="option2">Свердловский</option>
            <option value="option3">Аламединский</option>
          </Select>
        </div>
        <div className="up5">
          <p>Улица</p>
          <Select width={215} placeholder="Выбрать">
            <option value="option1">Ахунбаева</option>
            <option value="option2">Тыналиева</option>
            <option value="option3">Магистраль</option>
          </Select>
        </div>
      </div>
      <div className="under">
        <div className="und1">
          <Input htmlSize={73} placeholder="Введите район или улицу" />
        </div>
        <div className="und2">
          <Button width={190} background={'transparent'} color={'#2D56A5'}>
            <ArrowUpIcon />
            Расширенный поиск
          </Button>
        </div>
        <div className="und3">
          <Button width={280} bgColor={'#2D56A5'} color={'white'}> 
            Показать 17 предложений
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyFour;
