import { Tabs,TabList,Tab,TabPanels,TabPanel } from '@chakra-ui/react'
import React from 'react'
import BuyOne from './BuyOne/BuyOne'
import BuyTwo from './BuyTwo/BuyTwo'
import BuyTree from './BuyTree/BuyTree'
import BuyFour from './BuyFour/BuyFour'

const BuyHome = () => {
  return (
    <div>
        <Tabs isFitted padding={0}>
            <TabList>
              <Tab>Вторичная</Tab>
              <Tab>Новостройки</Tab>
              <Tab>Дома и участки</Tab>
              <Tab>Коммерческая</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BuyOne />
              </TabPanel>
              <TabPanel>
                <BuyTwo />
              </TabPanel>
              <TabPanel>
                <BuyTree />
              </TabPanel>
              <TabPanel>
                <BuyFour />
              </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}

export default BuyHome