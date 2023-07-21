import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FcLibrary, FcMoneyTransfer } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';

import './service.css';

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      minW={300}
      maxW={300}
      maxH={150}
      minH={150}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={2}
      bg={'#2D56A5'}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'white'}
          ml={2}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading color="white" size="md">
            {heading}
          </Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  return (
    <>
      <Box p={4} marginTop={10}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={40} fontWeight={'bold'}>
            Наши Услуги
          </Heading>
          <Text
            textAlign={'center'}
            color={'gray.600'}
            className="service_text"
          >
            Агентство недвижимости №1 предлагает широкий спектр услуг по
            покупке-продажи недвижимости.
            <br />
            Предоставляем дополнительные услуги, такие как оценка рыночной
            стоимости недвижимости, помощь в получении ипотеки, юридические
            консультации и т.д.
            <br />
            Если вы ищете профессионального партнера по вопросам недвижимости,
            обратитесь в наше агентство. Мы готовы помочь вам в решении любых
            вопросов, связанных с недвижимостью.
          </Text>
        </Stack>

        <Wrap justify="center" mt={55}>
          <WrapItem>
            <Card
              heading={'Оценка недвижимости'}
              icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            />
          </WrapItem>
          <WrapItem>
            <Card
              heading={'Юридическое сопровождение'}
              icon={<Icon as={FcLibrary} w={10} h={10} />}
            />
          </WrapItem>
          <WrapItem>
            <Card
              heading={'Срочный выкуп за 1 час'}
              icon={<Icon color={'green'} as={FaMoneyBillWave} w={10} h={10} />}
            />
          </WrapItem>
          <WrapItem>
            <Card
              heading={'Продажа / Покупка'}
              icon={<Icon color={'black'} as={AiFillHome} w={10} h={10} />}
            />
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
}
