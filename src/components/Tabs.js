import { HStack, Button, Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Tabs = () => {
  const services = ['Oil Changes', 'Brake Services', 'Tyre Services', 'Engine Services', 'Paint Services'];

  const containerRef = useRef(null);

  const handleWheel = (e) => {
    containerRef.current.scrollLeft += e.deltaY;
  };

  return (
    <Box
      overflowX="hidden"
      onMouseOver={() => containerRef.current.focus()}
      onWheel={handleWheel}
      ref={containerRef}
      _hover={{bg:'pink.50'}}
    >
      <HStack spacing={3} p={4} align="flex-start" >
        {services.map((service, index) => (
          // Wrap each button in a Link passing the service name as a parameter
          <Link key={index} to={`/service/${encodeURIComponent(service)}`}> 
            <Button 
              // h={{base: '10', md: '40'}}
              // minW={{base: '20', md: '30'}}
              // borderRadius='md'
              borderWidth={2}
              borderRadius='full' 
              variant='outline' 
              flexShrink="0" 
              borderColor= "pink.400"
              _hover={{ bg: 'pink.400', color: 'white' }}
            >
              {service}
            </Button>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Tabs;
