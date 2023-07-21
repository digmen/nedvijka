import React, { useEffect, useState } from 'react';
import favoritestyle from './favorite.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Badge, Box } from '@chakra-ui/react';
import mainstyle from '../mainpage/mainpage.module.css';
import { BiShapeSquare } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

function FavoritePage() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Получение избранных идентификаторов из localStorage
    const favoriteIdsFromLocalStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];

    // Выполнение запросов к API для получения данных об избранных продуктах
    const fetchFavoriteProducts = async () => {
      try {
        const productsWithDetails = await Promise.all(
          favoriteIdsFromLocalStorage.map(async (id) => {
            const apartmentUrl = `https://vm4506017.43ssd.had.wf/api/apartment/${id}`;
            const apartmentResponse = await axios.get(apartmentUrl);
            return apartmentResponse.data;
          })
        );

        setFavoriteProducts(productsWithDetails);
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  return (
    <>
      <div className={favoritestyle.container}>
        <h1 style={{ marginTop: '50px', fontSize: '30px' }}>Избранные</h1>
        <div className={favoritestyle.f_card}>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <div key={product.id}>
                <Box key={product.id} className={mainstyle.card}>
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
                    {product.apartment_images.length > 0 ? (
                      <Link
                        to={`/details/${product.id}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          height="100%"
                          width="100%"
                          src={product.apartment_images[0].image}
                          alt="error"
                        />
                      </Link>
                    ) : (
                      <p>Нет изображения</p>
                    )}
                    <Box p="6">
                      <Box display="flex" alignproducts="baseline">
                        <Badge
                          borderRadius="full"
                          px="2"
                          colorScheme="teal"
                          fontSize="sm"
                        >
                          {product.type.title}
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
                        {product.status}
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
                          <TiLocation fontSize={'20px'} /> {product.region.name}
                          <br></br>
                          {product.address}
                        </Box>
                        <Box display={'flex'} gap={'5px'}>
                          <BiShapeSquare fontSize={'20px'} /> {product.square}
                        </Box>
                      </Box>
                      <Box
                        fontSize="2xl"
                        fontWeight={600}
                        display={'flex'}
                        justifyContent={'space-between'}
                      >
                        {product.price} $
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            ))
          ) : (
            <div className={favoritestyle.add}>
              <span>Тут пока нет избранных...</span>
              <Link to="/">
                <button>Добавить</button>
              </Link>
            </div>
          )}
        </div>
        <div className="sss"></div>
      </div>
    </>
  );
}

export default FavoritePage;
