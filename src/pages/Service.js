import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { Heading } from '@chakra-ui/react'
import { px } from 'framer-motion';

const Service = () => {
    return (
        <Box>
            <NavBar />
            <Heading ml={4} fontSize='25px'>Autoshops with __________ service</Heading>
            <Box mt={4}> {/* Adjust the value (4 in this case) to the desired space */}
                <ProductCard />
            </Box>
        </Box>
    );
};

export default Service;