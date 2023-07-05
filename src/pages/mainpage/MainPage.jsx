import React from 'react';
import mainstyle from './mainpage.module.css';
import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import SellHome from '../../components/nedv/SellHome/SellHome';
import BuyHome from '../../components/nedv/BuyHome/buyHome';
import Bestbroduct from '../../components/Bestbroduct';
import q from './imghome/q.svg';
import w from './imghome/w.svg';
import e from './imghome/e.svg';
import r from './imghome/r.svg';
import bg1 from './imghome/bg1.jpg';
import ProductCard from '../../components/PrdouctCard';

function MainPage() {
  return (
    <>
      <div>
        <div>
          <div>
            <Image
              alt="error img"
              src={bg1}
              style={{ width: '100%', maxHeight: '50%' }}
            />
            <div className={mainstyle.container}>
              <span>
                Напишите нам прямо сейчас - и мы сэкономим ваше время, нервы и
                деньги.
              </span>
              <Tabs
                bg={'white'}
                borderRadius={5}
                isFitted
                variant="enclosed"
                p={[150, 70]}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'100%'}
                position={'absolute'}
                top={350}
                right={30}
              >
                <TabList mb="1em">
                  <Tab>Купить</Tab>
                  <Tab>Продать</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <BuyHome />
                  </TabPanel>
                  <TabPanel>
                    <SellHome />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
          <div className={mainstyle.main}>
            <Bestbroduct />
          </div>
          <div className={mainstyle.main}>
            <div>
              <div className={mainstyle.description}>
                <div style={{ width: '1000px', textAlign: 'center' }}>
                  <h1>Причины выбрать именно нас</h1>
                  <span>
                    У нас есть многолетний опыт в сфере недвижимости и вы
                    получите полный пакет услуг, чтобы наилучшим образом продать
                    купить квартиру, дом, участок, коммерческую недвижимость в
                    Бишкеке.
                  </span>
                </div>
              </div>
              <div className={mainstyle.des_card}>
                <img style={{ width: '300px' }} alt="error img" src={q}></img>
                <img style={{ width: '300px' }} alt="error img" src={w}></img>
                <img style={{ width: '300px' }} alt="error img" src={e}></img>
                <img style={{ width: '300px' }} alt="error img" src={r}></img>
              </div>
            </div>
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
