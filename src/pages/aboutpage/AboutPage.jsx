import React, { useEffect, useState } from 'react';
import aboutstyle from './about.module.css';
import { Box, Button, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import circle from './Iconcircle.svg';
import bg1 from './bg1.svg';
import photo1 from './photo.svg';
import footer from './ftbg1.svg';
import { useProductContext } from '../../contexts/ProductContext';

function AboutPage() {
  const { review, getReview } = useProductContext();

  useEffect(() => {
    getReview();
  }, []);

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <>
      <div className={aboutstyle.main}>
        <img src={bg1} style={{ width: '100%' }}></img>
        <span>Агентство Недвижимости №1</span>
        <p>Ваш надежный партнер! Самые эффективные методы</p>
      </div>
      <div className={aboutstyle.container}>
        <section className={aboutstyle.s1}>
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '100px',
              fontSize: '24px',
              marginBottom: '50px',
            }}
          >
            АГЕНТСТВО НЕДВИЖИМОСТИ В БИШКЕКЕ
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className={aboutstyle.specialist_text1}>
              <span>
                Агентство недвижимости в городе Бишкек ведущая компания в сфере
                недвижимости. Мы собрали в одном месте лучших экспертов рынка,
                чтобы предложить клиентам лучшее – профессиональные рекомендации
                и самые выгодные предложения по продаже и покупке недвижимости!
              </span>
              <span>
                Высокий сервис и безупречное качество предоставления услуг – это
                фундамент, на котором строится работа всей нашей команды. Мы за
                прозрачность и открытость в сделках!
              </span>
            </div>
            <img src="https://img-fotki.yandex.ru/get/4424/26720365.c3/0_78046_948a62d7_orig.jpg"></img>
          </div>
        </section>
        <section style={{ marginTop: '100px' }}>
          <div className={aboutstyle.specialist_text2}>
            <h1 style={{ fontSize: '24px' }}>СПЕЦИАЛИСТЫ</h1>
            <span>
              Мы собрали в одном месте лучших экспертов рынка, чтобы предложить
              вам лучшее – профессиональные рекомендации и самые выгодные
              предложения по продаже и покупке недвижимости! Агентство
              недвижимости номер 1!
            </span>
          </div>
        </section>
        <section
          style={{
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Box m={10} w={350} borderWidth="1px" overflow="hidden">
            <Image style={{ width: '100%' }} src={photo1} />
            <Box p="6">
              <Box fontSize={18}>Имя содрудника</Box>
            </Box>
          </Box>
          <Box m={10} w={350} borderWidth="1px" overflow="hidden">
            <Image style={{ width: '100%' }} src={photo1} />
            <Box p="6">
              <Box fontSize={18}>Имя содрудника</Box>
            </Box>
          </Box>
          <Box m={10} w={350} borderWidth="1px" overflow="hidden">
            <Image style={{ width: '100%' }} src={photo1} />
            <Box p="6">
              <Box fontSize={18}>Имя содрудника</Box>
            </Box>
          </Box>
          <Box m={10} w={350} borderWidth="1px" overflow="hidden">
            <Image style={{ width: '100%' }} src={photo1} />
            <Box p="6">
              <Box fontSize={18}>Имя содрудника</Box>
            </Box>
          </Box>
        </section>
        <div className={aboutstyle.reviews}>
          <h1>Отзывы наших клиентов</h1>
          <SimpleGrid columns={3} spacing={10}>
            {review.slice(0, 3).map((item) => (
              <div className={aboutstyle.reviews_slider}>
                <span>{item.fullname}</span>
                <div>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      onClick={() => handleRating(value)}
                      style={{
                        cursor: 'pointer',
                        color: value <= item.stars ? 'gold' : 'gray',
                      }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <span className={aboutstyle.description}>
                  {item.results.review_text}
                </span>
              </div>
            ))}
          </SimpleGrid>
          <Link to="/abouttwo">
            <Button mt={50} colorScheme="facebook">
              Посмотреть все
            </Button>
          </Link>
          <div style={{ marginTop: '100px' }}>
            <Link to="/">
              <Button p={7} colorScheme="facebook">
                <Image paddingRight={5} src={circle} />
                Перейти на сайт
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
