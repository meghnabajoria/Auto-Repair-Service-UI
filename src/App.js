// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Tabs from './components/Tabs';

function App() {
  return (
    <ChakraProvider>
      <div>
        {/* Navigation Bar */}
        <NavBar />
        <Hero />
        <Tabs />


      </div>
    </ChakraProvider>
  );
}

export default App;
