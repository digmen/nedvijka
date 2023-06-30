import React from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsPerson } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import bg2 from './img/bg2.svg';

export default function Contact2() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bgImage={bg2}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Контакты</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Заполните форму ниже, чтобы связаться с нами
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="white" size="20px" />}
                      >
                        +996 (555) 00 00 55
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="white" size="20px" />}
                      >
                        nedno1@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="white" size="20px" />}
                      >
                        Bishkek, Kyrgyzstan
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      color="white"
                      aria-label="Whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                    <IconButton
                      color="white"
                      aria-label="Instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<AiOutlineInstagram size="28px" />}
                    />
                    <IconButton
                      color="white"
                      aria-label="Call"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<FiPhoneCall size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Введите имя</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Эл. почта</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Сообщение</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Ваше сообщение"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Отправить
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
