import React, { useState, useEffect } from 'react';
import startlogo from './imghome/start_logo.png';
import mainstyle from './mainpage.module.css';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import SellHome from '../../components/nedv/SellHome/SellHome';
import BuyHome from '../../components/nedv/BuyHome/buyHome';
import Bestbroduct from '../../components/Bestbroduct';
import q from './imghome/q.svg';
import w from './imghome/w.svg';
import e from './imghome/e.svg';
import r from './imghome/r.svg';
import ProductCard from '../../components/PrdouctCard';

function MainPage() {
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

  const [isVis, setIsVis] = useState(true);

  useEffect(() => {
    const vis = localStorage.getItem('vis');

    if (vis === null) {
      localStorage.setItem('vis', 'true');
      setIsVis(true);
    } else {
      setIsVis(false);
      localStorage.setItem('vis', false);
    }
  }, []);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className={mainstyle.fade_out} onAnimationEnd={handleAnimationEnd}>
          <img
            className={mainstyle.start_logo}
            src={startlogo}
            alt="Start Logo"
          />
        </div>
      )}
      {!isVis && (
        <div>
          <Tabs isFitted variant="enclosed" p={[170, 70]}>
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
                <img src={q}></img>
                <img src={w}></img>
                <img src={e}></img>
                <img src={r}></img>
              </div>
            </div>
            <ProductCard />
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
