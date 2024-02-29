// Hero.js
import React from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
const Hero = () => {
  return (
    <Flex
      w="full"
      h="40vh"
      backgroundImage={`url(${process.env.PUBLIC_URL}/hero_image.jpg)`}

      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" align="flex-start" spacing={6}>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Vehicle Services at your doorstep.
          </Text>
          <Input
                focusBorderColor='pink.600'
                borderColor= "pink.400"
                textColor= "white"
                placeholder='Search auto services near you'
                borderRadius='full' // Rounds the corners
                _placeholder={{ color: 'white' }}
          />
          
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
