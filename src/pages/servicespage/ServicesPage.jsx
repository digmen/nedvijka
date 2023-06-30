import React from 'react';
import GridListWith from '../../components/Services';
import ThreeTierPricingHorizontal from '../../components/Services2';
import Bestbroduct from '../../components/Bestbroduct';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function ServicesPage(props) {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1300px' }}>
      <GridListWith />
      <Bestbroduct />
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          alignItems={'center'}
          display={'flex'}
          width={500}
          height={350}
          bgColor={'blackAlpha.100'}
          mt={20}
          borderRadius={5}
        >
          <FormControl gap={10} justifyContent={'center'} display={'flex'}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Input mb={5} placeholder="Имя" width={350} bgColor={'white'} />
              <Input
                mb={10}
                placeholder="Телефон"
                type="tel"
                width={350}
                bgColor={'white'}
              />
              <Button
                display={'flex'}
                width={200}
                bgColor="#284F9A"
                color={'white'}
              >
                Отправить
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default ServicesPage;
