import {
    Button,
    Flex,
    Text,
    Heading,
    Box,
    Link,
    Input,
    Stack,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { Link as RouterLink } from 'react-router-dom';
  
  const SignIn = () => {
    const gradientColor = useColorModeValue('linear(to-r, pink.200, pink.400)', 'linear(to-r, pink.700, pink.900)');
  
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        {/* Image on the Left */}
        <Flex flex={1} position="relative" mr={-1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={process.env.PUBLIC_URL + '/hero_image.jpg'}
          />
          {/* Left-side gradient overlay */}
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={1}
            bgGradient="linear(to-l, white, transparent)"
          />
        </Flex>
  
        {/* Form on the Right */}
        <Flex
          p={8} flex={1}
          align={'center'}
          justify={'center'}
          bgGradient="linear(to-r, white, pink.400)"
          ml={-1}>
          <Stack spacing={4} w={'full'} maxW={'2xl'} h={'xl'} py={12} px={6}>
            <Stack
              align={'center'}
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 8 }}
              maxW={{ lg: 'xl' }}
              h={{ base: 'auto', md: 'xl' }}
              spacing={{ base: 8 }}
              boxShadow="lg"
              borderColor="pink.100"
              borderWidth={1}>
              <Stack spacing={4}>
                <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                  Sign In
                  <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                    !
                  </Text>
                </Heading>
              </Stack>
              <Box as={'form'} mt={10} w={'full'}>
                <Stack spacing={6}>
                  <Input
                    placeholder="Enter Email"
                    type='email'
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    mb={'5'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                    placeholder="Enter Password"
                    type='password'
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    mb={'5'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                </Stack>
                <Button
                  fontFamily={'heading'}
                  mt={8}
                  w={'full'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={'white'}
                  mb={'6'}
                  _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                    boxShadow: 'xl',
                  }}>
                  Log In
                </Button>
                <Stack pt={6}>
                  <Text align={'center'}>
                    New User? <Link as={RouterLink} to="/signup" color={'blue.400'}>Sign Up</Link>
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  };
  
  export default SignIn;
  