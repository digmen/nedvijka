import React from 'react';
import mainstyle from './mainpage.module.css';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import SellHome from '../../components/nedv/SellHome/SellHome';
import BuyHome from '../../components/nedv/BuyHome/buyHome';
import Bestbroduct from '../../components/Bestbroduct';
import q from './imghome/q.svg';
import w from './imghome/w.svg';
import e from './imghome/e.svg';
import r from './imghome/r.svg';
import bg1 from './imghome/bg1.svg';
import ProductCard from '../../components/PrdouctCard';

function MainPage() {
  return (
    <>
      <div>
        <div>
          <div>
            <img
              alt="error img"
              src={bg1}
              style={{ width: '100%', height: '100%' }}
            ></img>
            <Tabs
              bg={'white'}
              borderRadius={5}
              isFitted
              variant="enclosed"
              p={[170, 70]}
              backgroundRepeat={'no-repeat'}
              backgroundSize={'100%'}
              position={'absolute'}
              top={100}
              right={50}
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
          <div className={mainstyle.main}>
            <Bestbroduct />
          </div>
          <div className={mainstyle.main}>
            <div>
              <div className={mainstyle.description}>
                <div style={{ width: '600px' }}>
                  <h1>Выбирайте наше агентство недвижимости</h1>
                  <span>
                    У нас есть многолетний опыт в сфере недвижимости и вы
                    получите полный пакет услуг, чтобы наилучшим образом продать
                    купить квартиру, дом, участок, коммерческую недвижимость в
                    Бишкеке.
                  </span>
                </div>
              </div>
              <div className={mainstyle.des_card}>
                <img alt="error img" src={q}></img>
                <img alt="error img" src={w}></img>
                <img alt="error img" src={e}></img>
                <img alt="error img" src={r}></img>
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
