import ButtonBlock2 from './btn2';
import React from 'react';
import './buymodule2.css';
import { Button, Input, Select } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const BuyTwo = () => {
  return (
    <div className="buy">
      <div className="up">
        <div className="up1">
          <p>Комнатность</p>
          <ButtonBlock2 />
        </div>
        <div className="up2">
          <p>Стоимость, с</p>
          <Input htmlSize={9} width="auto" placeholder="От" />
          <Input htmlSize={9} width="auto" placeholder="До" />
        </div>
        <div className="up3">
          <p>Площадь, м2</p>
          <Input htmlSize={5} width="auto" placeholder="От" />
          <Input htmlSize={5} width="auto" placeholder="До" />
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
          <p>Тип сделки</p>
          <Select width={176} placeholder="Выбрать">
            <option value="option1">Кирпичный</option>
            <option value="option2">Грязевой</option>
            <option value="option3">Бетонный</option>
          </Select>
        </div>
        <div className="up6">
          <p>Жилой комплекс</p>
          <Select width={176} placeholder="Выбрать">
            <option value="option1">KgGroup</option>
            <option value="option2">Avangard</option>
            <option value="option3">Ihlas</option>
          </Select>
        </div>
      </div>
      <div className="under">
        <div className='und'>
          <div className="und1">
            <Input
              htmlSize={56}
              placeholder="Введите район, улицу,дом или ЖК"
            />
          </div>
          <div className="und2">
            <Select width={141} placeholder="Срок сдачи">
              <option value="option1">1 год</option>
              <option value="option2">2 года</option>
              <option value="option3">3 года</option>
            </Select>
          </div>
        </div>
        <div className="und4">
          <Button width={280} bgColor={'#2D56A5'} color={'white'}>
            Показать 6 предложений
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyTwo;
