import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import logo from '../pages/mainpage/imghome/start_logo.png';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={50}
      h={50}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      mt={20}
      bg={useColorModeValue('#003F9E', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
          <Stack color={'white'} align={'center'}>
            <ListHeader color={'white'}>Свяжитесь с нами</ListHeader>
            <Link color={'white'} href={'#'}>
              <Image boxSize={120} src={logo} />
            </Link>
            <Stack direction={'row'} spacing={6}>
              <SocialButton href={'#'}>
                <BsWhatsapp size={20} color="white" />
              </SocialButton>
              <SocialButton href={'#'}>
                <FiPhoneCall size={20} color="white" />
              </SocialButton>
              <SocialButton href={'#'}>
                <FaInstagram size={20} color="white" />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack minW={250} ml={10} color={'white'} align={'flex-start'}>
            <ListHeader color={'white'}>Свяжитесь с нами</ListHeader>
            <Link color={'white'} href={'#'}>
              Джантошева 121 / Байтик Баатыра, Бишкек, Кыргызстан
            </Link>
            <Link color={'white'} href={'#'}>
              WhatsApp
            </Link>
            <Link color={'white'} href={'#'}>
              +996551660066
            </Link>
            <Link color={'white'} href={'#'}>
              +996501660066
            </Link>
          </Stack>

          <Stack minW={250} ml={50} color={'white'} align={'flex-start'}>
            <ListHeader color={'white'}>Категории</ListHeader>
            <Link color={'white'} href={'#'}>
              Вторичная недвижимость
            </Link>
            <Link color={'white'} href={'#'}>
              Дома и Участки
            </Link>
            <Link color={'white'} href={'#'}>
              Коммерческая недвижимость
            </Link>
          </Stack>

          <Stack ml={100} color={'white'} align={'flex-start'}>
            <ListHeader>О нас</ListHeader>
            <Link color={'white'} href={'#'}>
              Услуги
            </Link>
            <Link color={'white'} href={'#'}>
              Контакты
            </Link>
            <Link color={'white'} href={'#'}>
              Отзывы
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'center' }}
          align={{ md: 'center' }}
        >
          <Text color={'white'}>© Все авторские права защищены 2023</Text>
        </Container>
      </Box>
    </Box>
  );
}
