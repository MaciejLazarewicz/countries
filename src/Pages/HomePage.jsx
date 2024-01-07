import { Box, Image, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ReactRouterLink from '../components/ReactRouterLink';

import Footer from '../components/Footer';

function HomePage() {
  const continents = ['Africa', 'America', 'Australia', 'Asia', 'Europe'];
  return (
    <Box width="100%">
      <Navbar />
      <Box
        position="absolute"
        top="10%"
        left="40%"
        right="40%"
        display="flex"
        zIndex="1"
      >
        <SearchBar />
      </Box>

      <Box position="relative">
        <Box position="absolute" top="50%" left="35%" zIndex="1">
          <ReactRouterLink to="/CountriesData">All Countries</ReactRouterLink>
        </Box>
        <Image
          position="relative"
          width="100%"
          height="auto"
          src="/src/assets/WorldMap.jpg"
        />
        <Text position="absolute" zIndex="1" top="55%" left="50%">
          {continents[0]}
        </Text>
        <Text position="absolute" zIndex="1" top="40%" left="20%">
          {continents[1]}
        </Text>
        <Text position="absolute" zIndex="1" top="73%" right="15%">
          {continents[2]}
        </Text>
        <Text position="absolute" zIndex="1" top="40%" right="30%">
          {continents[3]}
        </Text>
        <Text position="absolute" zIndex="1" top="30%" right="40%">
          {continents[4]}
        </Text>
      </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
