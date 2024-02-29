import { HStack, Button } from '@chakra-ui/react';

const Tabs = () => {
  const services = ['Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services','Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services', 'Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services','Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services','Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services' ];

  return (
      <HStack spacing={4} p={4} overflowX="auto">
        {services.map((service, index) => (
          <Button key={index} borderRadius='full' variant='outline' _hover={{ bg: 'pink.400', color: 'white' }}>
            {service}
          </Button>
        ))}
      </HStack>
  );
};

export default Tabs;
