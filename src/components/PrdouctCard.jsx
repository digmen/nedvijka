import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import mainstyle from '../pages/mainpage/mainpage.module.css';
import { FcLike } from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Badge, Box } from '@chakra-ui/react';
import MySlider from '../components/Slider';
import { useState } from 'react';

function ProductCard(props) {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={mainstyle.product_card}>
      <h1>Предложения для вас</h1>
      <div className={mainstyle.card}>
        {products.map((item) => (
          <Link
            key={item}
            className={mainstyle.card}
            to={`/details/${item.id}`}
          >
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
                <MySlider />
              </div>
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="teal"
                    fontSize="sm"
                  >
                    {item.category}
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
                  <Box display={'flex'} gap={'5px'}>
                    <TiLocation fontSize={'20px'} /> {item.location}
                  </Box>
                  <Box display={'flex'} gap={'5px'}>
                    <BiShapeSquare fontSize={'20px'} /> {item.area} м2
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
