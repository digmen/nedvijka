import React from 'react';
import mainstyle from './mainpage.module.css';
import {
  Badge,
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import SellHome from '../../components/nedv/SellHome/SellHome';
import BuyHome from '../../components/nedv/BuyHome/buyHome';
import Bestbroduct from '../../components/Bestbroduct';
import q from './imghome/q.svg';
import w from './imghome/w.svg';
import e from './imghome/e.svg';
import r from './imghome/r.svg';
import bg1 from './imghome/bg1.png';
import logo from './imghome/logo.svg';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function MainPage() {
  const { products, getProducts } = useProductContext();

  // Получаем список избранных продуктов из localStorage при загрузке страницы
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites;
  });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // При изменении списка избранных продуктов сохраняем его в localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Функция для обновления состояния избранных продуктов при нажатии кнопки "Избранное"
  const toggleFavorite = async (productId) => {
    try {
      // Получаем ID продукта из localStorage
      const userId = localStorage.getItem('id');

      if (!userId) {
        // Если нет ID пользователя, запрос не выполняется
        console.error('Отсутствует ID пользователя в localStorage.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
        'X-Refresh-Token': localStorage.getItem('adminRefresh'),
      };

      if (!favorites.includes(productId)) {
        // Если продукта нет в избранном, добавляем его в список
        setFavorites((prevFavorites) => [...prevFavorites, productId]);

        // Отправляем POST-запрос на сервер для добавления в избранное
        await axios.post(
          'https://vm4506017.43ssd.had.wf/api/favorite/',
          { user: userId, apartment: productId },
          {
            headers,
          }
        );
      } else {
        // Если продукт уже в избранном, удаляем его из списка
        setFavorites((prevFavorites) =>
          prevFavorites.filter((id) => id !== productId)
        );

        // Отправляем DELETE-запрос на сервер для удаления из избранного
        await axios.delete(
          `https://vm4506017.43ssd.had.wf/api/favorite/${productId}`,
          {
            headers,
            data: { user: userId }, // Передаем ID пользователя в теле запроса
          }
        );
      }
    } catch (error) {}
  };

  return (
    <>
      <div>
        <div>
          <div>
            <Image
              alt="error img"
              src={bg1}
              style={{ width: '100%', maxHeight: '50%' }}
            />
            <div className={mainstyle.container}>
              <div className={mainstyle.main_logo}>
                <img src={logo} />
                <span>АГЕНТСТВО НЕДВИЖИМОСТИ №1</span>
              </div>
              <Tabs
                bg={'white'}
                borderRadius={70}
                isFitted
                variant="enclosed"
                p={[150, 70]}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'100%'}
                position={'absolute'}
                top={700}
                right={10}
              >
                <TabList mb="1em">
                  <Tab>Купить</Tab>
                  <Tab>Продать</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <BuyHome />
                  </TabPanel>
                  <TabPanel>
                    <SellHome />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
          <div className={mainstyle.main}>
            <Bestbroduct />
            <div>
              <div className={mainstyle.description}>
                <div style={{ width: '1000px', textAlign: 'center' }}>
                  <h1>Причины выбрать именно нас</h1>
                  <span>
                    У нас есть многолетний опыт в сфере недвижимости и вы
                    получите полный пакет услуг, чтобы наилучшим образом продать
                    купить квартиру, дом, участок, коммерческую недвижимость в
                    Бишкеке.
                  </span>
                </div>
              </div>
              <div className={mainstyle.des_card}>
                <img style={{ width: '300px' }} alt="error img" src={q}></img>
                <img style={{ width: '300px' }} alt="error img" src={w}></img>
                <img style={{ width: '300px' }} alt="error img" src={e}></img>
                <img style={{ width: '300px' }} alt="error img" src={r}></img>
              </div>
            </div>
            <div className={mainstyle.product_card}>
              <h1>Наши объекты</h1>
              <div className={mainstyle.p_card}>
                {products.map((item) => (
                  <Box key={item.id} className={mainstyle.card}>
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      style={{
                        width: '300px',
                        height: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      {item.apartment_images.length > 0 ? (
                        <Link
                          to={`/details/${item.id}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            height="100%"
                            width="100%"
                            src={item.apartment_images[0].image}
                            alt="error"
                          />
                        </Link>
                      ) : (
                        <p>Нет изображения</p>
                      )}
                      <Box p="6">
                        <Box display="flex" alignItems="baseline">
                          <Badge
                            borderRadius="full"
                            px="2"
                            colorScheme="teal"
                            fontSize="sm"
                          >
                            {item.type.title}
                          </Badge>
                        </Box>
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={1}
                          maxW="270px"
                        >
                          {item.status}
                        </Box>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          <Box pb={1} display={'flex'} gap={'5px'}>
                            <TiLocation fontSize={'20px'} /> {item.region.name}
                            <br></br>
                            {item.address}
                          </Box>
                          <Box display={'flex'} gap={'5px'}>
                            <BiShapeSquare fontSize={'20px'} /> {item.square}
                          </Box>
                        </Box>
                        <Box>{item.description.slice(0, 22)}...</Box>
                        <Box
                          fontSize="2xl"
                          fontWeight={600}
                          display={'flex'}
                          justifyContent={'space-between'}
                        >
                          {item.price} $
                          {favorites.includes(item.id) ? (
                            <AiFillHeart
                              color="red"
                              fontSize={'35px'}
                              onClick={() => toggleFavorite(item.id)}
                            />
                          ) : (
                            <AiOutlineHeart
                              color="red"
                              fontSize={'35px'}
                              onClick={() => toggleFavorite(item.id)}
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
