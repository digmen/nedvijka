import React, { useState } from 'react';
import aboutstyle from './about.module.css';
import { Button, Grid, GridItem, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import circle from './Iconcircle.svg';
import whatsapp from './whatsapp.svg';
import instagram from './instagram.svg';
import tiktok from './tiktok.svg';
import phone from './phone.svg';

function AboutPage(props) {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <>
      <img
        style={{ width: '100%' }}
        src="https://phonoteka.org/uploads/posts/2022-09/1663784366_1-phonoteka-org-p-moskva-siti-oboi-vkontakte-1.jpg"
      ></img>
      <div className={aboutstyle.container}>
        <div className={aboutstyle.main} style={{ display: 'flex' }}>
          <span>
            Агентство Недвижимости №1 - ваш надежный партнер! Самые эффективные
            методы
          </span>
        </div>
        <div className={aboutstyle.reviews}>
          <h1>Отзывы наших клиентов</h1>
          <SimpleGrid columns={3} spacing={10}>
            <div className={aboutstyle.reviews_slider}>
              <span>Болот Ибрагимов</span>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRating(value)}
                    style={{
                      cursor: 'pointer',
                      color: value <= rating ? 'gold' : 'gray',
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <span className={aboutstyle.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </span>
            </div>
            <div className={aboutstyle.reviews_slider}>
              <span>Болот Ибрагимов</span>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRating(value)}
                    style={{
                      cursor: 'pointer',
                      color: value <= rating ? 'gold' : 'gray',
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <span className={aboutstyle.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </span>
            </div>
            <div className={aboutstyle.reviews_slider}>
              <span>Болот Ибрагимов</span>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRating(value)}
                    style={{
                      cursor: 'pointer',
                      color: value <= rating ? 'gold' : 'gray',
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <span className={aboutstyle.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </span>
            </div>
          </SimpleGrid>
          <Button mt={50} colorScheme="facebook">
            Посмотреть все
          </Button>
          <div style={{ marginTop: '80px' }}>
            <Link to="/">
              <Button p={7} colorScheme="facebook">
                <Image paddingRight={5} src={circle} />
                Перейти на сайт
              </Button>
            </Link>
            <Grid mt={50} mb={300} templateColumns="repeat(10, 1fr)" gap={1}>
              <Link style={{ backgroundColor: '#1C3A75' }} w={8} h={8}>
                <Image w={10} src={whatsapp} />
              </Link>
              <Link style={{ backgroundColor: '#1C3A75' }}>
                <Image paddingRight={5} src={phone} />
              </Link>
              <Link p={7} style={{ backgroundColor: '#1C3A75' }}>
                <Image paddingRight={5} src={tiktok} />
              </Link>
              <Link p={7} style={{ backgroundColor: '#1C3A75' }}>
                <Image paddingRight={5} src={instagram} />
              </Link>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
