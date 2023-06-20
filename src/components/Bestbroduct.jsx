import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import mainstyle from '../pages/mainpage/mainpage.module.css';
import { FcLike } from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Badge, Box, Icon } from '@chakra-ui/react';
import MySlider from '../components/Slider';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

function Bestbroduct(props) {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  let [scrollcard, setscrollcard] = useState(0);
  const containerRef = useRef();

  const handlescrollLeft = () => {
    containerRef.current.scrollLeft -= 500;
  };

  const handlescrollRight = () => {
    containerRef.current.scrollLeft += 500;
  };
  return (
    <div className={mainstyle.bestproduct}>
      <h1>Лучшие предложения для вас</h1>
      <section className={mainstyle.card_slider_conatiner}>
        <div className={mainstyle.main_slider_contianer}>
          <button
            className={mainstyle.slider_icon_left}
            onClick={handlescrollLeft}
          >
            <Icon as={ArrowLeftIcon} boxSize={30} />
          </button>
          <div
            className={mainstyle.slider}
            style={{ scrollLeft: scrollcard }}
            ref={containerRef}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <div className={mainstyle.slider_card}>
                  {products.map((item) => (
                    <Box
                      key={item}
                      className={mainstyle.card}
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
                    </Box>
                  ))}
                </div>
              );
            })}
          </div>
          <button
            className={mainstyle.slider_icon_right}
            onClick={handlescrollRight}
          >
            <Icon as={ArrowRightIcon} boxSize={30} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Bestbroduct;
