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

function Bestbroduct() {
  const { bestproducts, getBestProducts } = useProductContext();

  useEffect(() => {
    getBestProducts();
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
                        px="2"
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
