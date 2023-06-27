import React from 'react';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import mainstyle from '../pages/mainpage/mainpage.module.css';
import { FcLike } from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Badge, Box } from '@chakra-ui/react';
// to={`/details/${item.id}`}

function ProductCard() {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={mainstyle.product_card}>
      <h1>Предложения для вас</h1>
      <div className={mainstyle.card}>
        {products.map((item) => (
          <Box key={item.id} className={mainstyle.card}>
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
              {item.apartment_images.length > 0 ? (
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
                    src={item.apartment_images[0].image}
                    alt="error"
                  />
                </div>
              ) : (
                <p>No image available.</p>
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
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
