import { Box, Image, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ReactRouterLink from '../components/ReactRouterLink';
import React from 'react';
import Footer from '../components/Footer';
import { MAIN_BACKGROUND_COLOR } from '../constants/Colors';

function HomePage() {
  // const [countriesData, setCountriesData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await FetchCountriesData();
  //       setCountriesData(data.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching countriesData:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box {...MAIN_BACKGROUND_COLOR}>
      <Navbar />
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        marginTop="50px"
        textAlign="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          gap="25px"
          marginBottom="25px"
        >
          <Box>
            <Image width="250px" height="250px" src="/src/assets/Africa.png" />

            <Text>Africa</Text>
          </Box>
          <Box>
            <Image width="250px" height="250px" src="/src/assets/America.png" />
            <Text>America</Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="25px">
          <SearchBar />
        </Box>
        <Box display="flex" justifyContent="center" gap="25px">
          <Box>
            <Image
              width="250px"
              height="250px"
              src="/src/assets/Australia.png"
            />
            <Text>Australia</Text>
          </Box>
          <Box>
            <Image width="250px" height="250px" src="/src/assets/Asia.png" />
            <Text>Asia</Text>
          </Box>
          <Box>
            <Image width="250px" height="250px" src="/src/assets/Europe.png" />
            <Text>Europe</Text>
          </Box>
        </Box>
      </Box>
      <ReactRouterLink to="/CountriesData">Countries</ReactRouterLink>

      <Footer />
    </Box>
  );
}

export default HomePage;
