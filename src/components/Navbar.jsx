import React, { useState } from 'react';
import logo from '../pages/mainpage/imghome/start_logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
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

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
        <div className='nav_rigtht'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <PhoneIcon />
            <div className="phone_num2">
              <a href="tel:+996550900700">+996 550 900 700</a>
              <a href="tel:+996221900900">+996 221 900 900</a>
            </div>
          </div>
          <div>
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
                  <FormControl>
                    <Input
                      mb={5}
                      ref={initialRef}
                      type="text"
                      placeholder="Имя"
                    />
                    <Input type="tel" placeholder="Телфон" />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Отправить
                  </Button>
                  <Button onClick={onClose}>Закрыть</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
