import React, { useEffect, useState } from 'react';
import logo from '../pages/mainpage/imghome/start_logo.png';
import './navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import logicon from './img/logicon.png';
import axios from 'axios';

function Navbar() {
  // дата для создание обращений обявлений
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // модальное окно
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem('login');
    if (storedLogin) {
      setLogin(storedLogin);
    }
  }, []);

  const [login, setLogin] = useState(true);
  const handleLogOut = () => {
    localStorage.clear('');
    return <Navigate to="/" />;
    setLogin(false);
  };

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
        console.log('Регистрация прошла успешно', response);
        console.log(response);
      } else {
        console.error('Ошибка регистрации');
      }
    } catch (error) {
      console.error('Ошибка соединения', error);
    }
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav_title">
          <Link to="/" className="nav_logo">
            <img src={logo} />
          </Link>
          <Link to="/">
            <span className="nav_text">Домой</span>
          </Link>
          <Link to="/favorite">
            <span className="nav_text">Избранное</span>
          </Link>
          <Link to="/services">
            <span className="nav_text">Услуги</span>
          </Link>
          <Link to="/aboutus">
            <span className="nav_text">О нас</span>
          </Link>
          <Link to="/contact">
            <span className="nav_text">Контакты</span>
          </Link>
        </div>

        <div className="nav_rigtht"></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
          }}
        ></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div className="phone_num">
            <PhoneIcon />
            <div className="phone_num2">
              <a href="tel:+996550900700">+996 550 900 700</a>
              <a href="tel:+996221900900">+996 221 900 900</a>
            </div>
          </div>
          <div>
            {login ? (
              <Menu>
                <MenuButton className="login">
                  <Image src={logicon} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem>{login}</MenuItem>
                    <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            ) : (
              <Menu>
                <MenuButton className="login">
                  <Image src={logicon} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <Link to="/login">
                      <MenuItem>Регистрация</MenuItem>
                    </Link>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </div>
          <div>
            <Button
              backgroundColor=" #2D56A5"
              className="button"
              onClick={onOpen}
              borderRadius={50}
            >
              <span className="button__text">
                <AddIcon className="button_icon" boxSize={3} /> Добавить
                объявление
              </span>
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Отправить запрос</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <form onSubmit={handleSubmitTel}>
                    <button
                      style={{
                        backgroundColor: 'black',
                        width: '10px',
                        height: '10px',
                      }}
                    ></button>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  </form>
                  <FormControl>
                    <Input
                      mb={5}
                      ref={initialRef}
                      type="text"
                      placeholder="Имя"
                    />
                    <Input type="number" placeholder="Телфон" />
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Отправить
                      </Button>
                      <Button onClick={onClose}>Закрыть</Button>
                    </ModalFooter>
                  </FormControl>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
