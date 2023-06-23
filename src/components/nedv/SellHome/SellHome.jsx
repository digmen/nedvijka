import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
export default function SellHome() {
  return (
    <Stack
      minH={'300px'}
      maxW={'1350px'}
      direction={{ base: 'column', md: 'row' }}
      backgroundColor={'white'}
      p={0}
    >
      <Flex maxW={400} p={0} flex={3} display={'flex'} flexDirection={'column'}>
        <Text fontSize={32} fontWeight={700}>
          Поможем продать недвижимость быстро и выгодно
        </Text>
        <Text>Оставьте заявку, и мы перезвоним</Text>
      </Flex>
      <Image
        w={467}
        h={300}
        src={
          'https://img.freepik.com/free-vector/realty-agent-holding-keys-standing-near-building-isolated-flat-vector-illustration-cartoon-woman-house-sale_74855-8548.jpg?w=2000&t=st=1686281380~exp=1686281980~hmac=a3c06600dd390cdf3fb5c9ffdeaa5c9deb606b6f8ca0c42b2bb15d79a2cbc3ce'
        }
      />
      <Flex pr={5} pl={5} flex={1} display={'flex'} flexDirection={'column'}>
        <p>Тип недвижимости</p>
        <Select width={294} placeholder="Выбрать">
          <option value="option1">Квартира</option>
          <option value="option1">Дом</option>
          <option value="option2">Таунхаус</option>
          <option value="option3">Дача</option>
        </Select>
        <p>Телефон</p>
        <InputGroup width={294}>
          <InputLeftAddon fontSize={25} children="🇰🇬" />
          <Input type="tel" placeholder="+996 XXX XXX XXX" />
        </InputGroup>
        <FormControl width={294} isRequired>
          <Textarea
            height={76}
            name="message"
            placeholder="Добрый день. Хочу продать недвижимость. Нужна консультация"
            rows={6}
            resize="none"
            fontSize={14}
          />
        </FormControl>
        <Button
          backgroundColor={'#dfebff'}
          color={'#2a72ee'}
          width={280}
          colorScheme="twitter"
        >
          Получить консультацию
        </Button>
      </Flex>
    </Stack>
  );
}
