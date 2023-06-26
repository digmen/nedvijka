import React from 'react';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import mainstyle from '../pages/mainpage/mainpage.module.css';
import { FcLike } from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Badge, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

function Bestbroduct(props) {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={mainstyle.bestproduct}>
      <h1 style={{ marginTop: '100px' }}>Лучшие предложения для вас</h1>
      <div className={mainstyle.card}>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          navigation={true}
          modules={[Navigation]}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} display="flex">
              <Box className={mainstyle.card}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  style={{
                    width: '300px',
                    height: '340px',
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
                    {item.apartment_images.length > 0 ? (
                      <img
                        width="100%"
                        src={item.apartment_images[0].image}
                        alt="error"
                      />
                    ) : (
                      <p>No image available.</p>
                    )}
                  </div>
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
                    <Box
                      fontSize="2xl"
                      fontWeight={600}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      {item.price} Сом
                      <FcLike fontSize={'30px'} />
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
