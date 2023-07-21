import React from 'react';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import mainstyle from '../pages/mainpage/mainpage.module.css';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Badge, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import axios from 'axios';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Bestbroduct() {
  const { bestproducts, getBestProducts } = useProductContext();

  // Получаем список избранных продуктов из localStorage при загрузке страницы
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites;
  });

  useEffect(() => {
    getBestProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (productId) => {
    try {
      const userId = localStorage.getItem('id');

      if (!userId) {
        console.error('Отсутствует ID пользователя в localStorage.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${localStorage.getItem('adminAccess')}`,
        'X-Refresh-Token': localStorage.getItem('adminRefresh'),
      };

      if (favorites.includes(productId)) {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((id) => id !== productId)
        );

        await axios.delete(
          `https://vm4506017.43ssd.had.wf/api/favorite/${productId}`,
          {
            headers,
            data: { user: userId },
          }
        );
      } else {
        setFavorites((prevFavorites) => [...prevFavorites, productId]);

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
    <div className={mainstyle.bestproduct}>
      <span className={mainstyle.best_span}>
        Напишите нам прямо сейчас - и мы сэкономим <br /> ваше время, нервы и
        деньги.
      </span>
      <h1>Лучшие предложения для вас</h1>
      <div className={mainstyle.card}>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          navigation={true}
          modules={[Navigation]}
          style={{ maxWidth: '1300px' }}
        >
          {bestproducts.map((apartment) => (
            <SwiperSlide key={apartment.id}>
              <Box className={mainstyle.card}>
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
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    {apartment.apartment_images.length > 0 ? (
                      <img
                        width="100%"
                        src={apartment.apartment_images[0].image}
                        alt="error"
                      />
                    ) : (
                      <p>No image available.</p>
                    )}
                  </div>
                  <Box p="6">
                    <Box display="flex" alignapartmentss="baseline">
                      <Badge
                        borderRadius="full"
                        px="3"
                        colorScheme="teal"
                        fontSize="sm"
                      >
                        {apartment.type.title}
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
                      {apartment.status}
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
                        <TiLocation fontSize={'20px'} /> {apartment.region.name}
                        <br></br>
                        {apartment.address}
                      </Box>
                      <Box display={'flex'} gap={'5px'}>
                        <BiShapeSquare fontSize={'20px'} /> {apartment.square}
                      </Box>
                    </Box>
                    <Box
                      fontSize="2xl"
                      fontWeight={600}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      {apartment.price} $
                      {favorites.includes(apartment.id) ? (
                        <AiFillHeart
                          color="red"
                          fontSize={'35px'}
                          onClick={() => toggleFavorite(apartment.id)}
                        />
                      ) : (
                        <AiOutlineHeart
                          color="red"
                          fontSize={'35px'}
                          onClick={() => toggleFavorite(apartment.id)}
                        />
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Bestbroduct;
