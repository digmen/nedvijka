import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContext';
import deteilstyle from './deteil.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import { BiShapeSquare } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

function DetailPage() {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProductContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Получаем список избранных продуктов из localStorage при загрузке страницы
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites;
  });

  useEffect(() => {
    getOneProduct(id);
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

      if (favorites.includes(productId)) {
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
      } else {
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
      }
    } catch (error) {}
  };
  return (
    <div className={deteilstyle.container}>
      {oneProduct ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Slider className={deteilstyle.img} {...settings}>
              {oneProduct.apartment_images.length > 0 ? (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    height="100%"
                    width="100%"
                    src={oneProduct.apartment_images[0].image}
                    alt="error"
                  />
                </div>
              ) : (
                <p>No image available.</p>
              )}
            </Slider>
            <div>
              <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Segun Adebayo
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Text>
                  <Text fontSize="sm">UI Engineer</Text>
                </Box>
              </Flex>
              <Text mt={10} maxW={'600px'}>
                {oneProduct.description}
              </Text>
            </div>
          </div>
          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Box
              maxW="650"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="teal"
                    fontSize="sm"
                  >
                    {oneProduct.category}
                  </Badge>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {oneProduct.status}
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Box display={'flex'} gap={'5px'}>
                    <TiLocation fontSize={'20px'} /> {oneProduct.location}
                  </Box>
                  <Box display={'flex'} gap={'5px'}>
                    <BiShapeSquare fontSize={'20px'} /> {oneProduct.area} м2
                  </Box>
                </Box>
                <Box
                  fontSize="2xl"
                  fontWeight={600}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  {oneProduct.price} $
                  {favorites.includes(oneProduct.id) ? (
                    <AiFillHeart
                      color="red"
                      fontSize={'35px'}
                      onClick={() => toggleFavorite(oneProduct.id)}
                    />
                  ) : (
                    <AiOutlineHeart
                      color="red"
                      fontSize={'35px'}
                      onClick={() => toggleFavorite(oneProduct.id)}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default DetailPage;
