import React from 'react';
import {
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';

const shopNames = ['Auto Shop 1', 'Auto Shop 2', 'Auto Shop 3', 'Auto Shop 4', 'Auto Shop 5', 'Auto Shop 6', 'Auto Shop 7', 'Auto Shop 8', 'Auto Shop 9', 'Auto Shop 10'];

const ProductCard = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '8' }} wrap="wrap" justifyContent="center">
      {shopNames.map((shopName, index) => (
        <Card 
          key={index} 
          maxW={{ base: 'full', md: '350px' }} 
          maxH={{ base: 'full', md: '400px' }} 
          mr={{base: '2', md: '5'}} 
          mb={{base: '2', md: '5'}}
          _hover={{bg:'pink.50'}}>
          <CardBody>
            <Image
              src={process.env.PUBLIC_URL + `/auto-shop-product-card.jpg`}
              alt={`Auto Shop ${index + 1}`}
              borderRadius="lg"
              align='center'
              boxSize={{ base: 'full', md: '300px' }}
              objectFit="cover"
            />
            <Stack mt="2" spacing="1" textAlign="center">
              <Heading size="sm" noOfLines={2}>
                {shopName}
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default ProductCard;
