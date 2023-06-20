import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContext';
import deteilstyle from './deteil.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import { BiShapeSquare } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { FcLike } from 'react-icons/fc';

function DetailPage() {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProductContext();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={deteilstyle.container}>
      {oneProduct ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Slider className={deteilstyle.img} {...settings}>
              <div>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={oneProduct.img1}
                />
              </div>
              <div>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={oneProduct.img2}
                />
              </div>
              <div>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={oneProduct.img3}
                />
              </div>
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
              <Text mt={10} maxW={'600px'}>{oneProduct.description}</Text>
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
                  {oneProduct.price} Сом
                  <FcLike fontSize={'30px'} />
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
