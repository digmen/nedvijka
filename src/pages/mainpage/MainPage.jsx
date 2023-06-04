import React, { useState, useEffect } from 'react';
import startlogo from './imghome/start_logo.png';
import mainbg from './imghome/mainbg.jpg';
import mainstyle from './mainpage.module.css';
import { FcLike } from 'react-icons/fc';
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { useProductContext } from '../../contexts/ProductContext.jsx';
import { Link } from 'react-router-dom';
import Filterimg from './imghome/Filter.svg';
import MySlider from '../../contexts/Slider';
import { Filter } from '../../contexts/Filter';

function MainPage() {
  const [isVis, setIsVis] = useState(false);

  useEffect(() => {
    const vis = localStorage.getItem('vis');

    if (vis === null) {
      localStorage.setItem('vis', 'true');
      setIsVis(true);
    } else {
      setIsVis(false);
    }
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldAnimate = localStorage.getItem('shouldAnimate');

    if (shouldAnimate === null) {
      localStorage.setItem('shouldAnimate', 'true');
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  const { getProduct, products, bestproducts, getBestProduct } =
    useProductContext();

  useEffect(() => {
    getProduct();
    getBestProduct();
  }, []);

  const [size, setSize] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ['sm'];

  return (
    <>
      {isVisible && (
        <div className="fade-out" onAnimationEnd={handleAnimationEnd}>
          <img className="start_logo" src={startlogo} alt="Start Logo" />
        </div>
      )}
      {!isVis && (
        <div className={mainstyle.main}>
          <div className={mainstyle.mainbg}>
            <img
              className={mainstyle.mainbgimg}
              src={mainbg}
              alt="Main Background"
            />
            <div className={mainstyle.main_text}>
              <h1 className={mainstyle.main_text1}>
                Найдите свой идеальный дом с нами
              </h1>
              <h1 className={mainstyle.main_text2}>
                Агентство Недвижимости №1
              </h1>
            </div>
          </div>

          <div className={mainstyle.container}>
            <div className={mainstyle.bestproduct}>
              <h1>Лучшие предложения для вас</h1>
              {bestproducts.map((item) => (
                <Link
                  key={item.id}
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
            <div className={mainstyle.ads}>
              <div className={mainstyle.filter}>
                <h1>Объявления</h1>
                {sizes.map((size) => (
                  <Button onClick={() => handleClick(size)} key={size} m={4}>
                    <Image src={Filterimg} alt="Filter Image" />
                  </Button>
                ))}
                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Фильтр</DrawerHeader>{' '}
                    <DrawerBody>
                      <Text fontSize={'lg'}>Тип Недвижимости</Text>
                      <Filter />
                    </DrawerBody>
                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Отмена
                      </Button>{' '}
                      <Button colorScheme="blue">Сохранить</Button>{' '}
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
              <div className={mainstyle.card}>
                {products.map((item) => {
                  return (
                    <Link
                      to={`/details/${item.id}`}
                      key={item.id}
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
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
