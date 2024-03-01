import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import ProductCard from '../components/ProductCard';
import { Box } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box>
            <NavBar />
            <Hero />
            <Tabs />
            <ProductCard />
        </Box>
    );
};

export default Home;
