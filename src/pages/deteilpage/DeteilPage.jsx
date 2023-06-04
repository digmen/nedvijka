import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContext';
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import { TiLocation } from 'react-icons/ti';
import { BiShapeSquare } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';

function DetailPage() {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProductContext();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      {oneProduct ? (
        <Grid
          templateAreas={`
                  "nav main"
                  "nav footer"`}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            <Image src={oneProduct.img} />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            <Flex>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml="3">
                <Text fontWeight="bold">
                  Segun Adebayo
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Text>
                <Text fontSize="sm">UI Engineer</Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={'footer'}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden"></Box>
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                  fontSize="sm"
                >
                  {oneProduct.category}
                </Badge>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                maxW="270px"
              >
                {oneProduct.status}
              </Box>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                <Box display={'flex'} gap={'5px'}>
                  <TiLocation fontSize={'20px'} /> {oneProduct.location}
                </Box>
                <Box display={'flex'} gap={'5px'}>
                  <BiShapeSquare fontSize={'20px'} /> {oneProduct.area} м2
                </Box>
              </Box>
              <Box
                fontSize="2xl"
                fontWeight={600}
                display={'flex'}
                justifyContent={'space-between'}
              >
                {oneProduct.price} Сом
                <FcLike fontSize={'30px'} />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default DetailPage;
