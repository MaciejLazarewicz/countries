import { Box, Image, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ReactRouterLink from '../components/ReactRouterLink';
import Footer from '../components/Footer';
import { useBreakPoint } from '../constants/Breakpoints';
import { ViewIcon } from '@chakra-ui/icons';
import { RiShip2Fill } from 'react-icons/ri';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { FaTrainSubway } from 'react-icons/fa6';
import { MAIN_BACKGROUND_COLOR } from '../constants/Colors';

function HomePage() {
  const [isBreakPoint1600] = useBreakPoint('isBreakPoint1600');
  const [isBreakPoint1200] = useBreakPoint('isBreakPoint1200');
  const [isBreakPoint700] = useBreakPoint('isBreakPoint700');
  const [isBreakPoint400] = useBreakPoint('isBreakPoint400');
  const [isBreakPoint350] = useBreakPoint('isBreakPoint350');

  const countriesNameFont = {
    fontSize: isBreakPoint1200 ? '12px' : '16px',
    position: 'absolute',
    zIndex: '1',
    fontWeight: 'bold',
  };

  const allCountriesFont = {
    fontSize: isBreakPoint1200 ? '10px' : '18px',
    position: 'absolute',
    zIndex: '1',
    fontWeight: 'bold',
  };
  const continents = ['Africa', 'America', 'Australia', 'Asia', 'Europe'];
  const continentIcon = isBreakPoint700
    ? continents.map(() => <ViewIcon key={''} />)
    : continents;

  return (
    <Box width="100%">
      <Navbar />
      <Box position="relative">
        <Box
          {...allCountriesFont}
          top="50%"
          left={isBreakPoint400 ? '35%' : '32%'}
        >
          <ReactRouterLink to="/CountriesData">
            {isBreakPoint400 ? <RiShip2Fill /> : <Text>All Countries</Text>}
          </ReactRouterLink>
        </Box>

        <Image
          position="relative"
          width="100%"
          maxW="100%"
          height="auto"
          src="/src/assets/WorldMap.jpg"
        />
        {isBreakPoint1600 ? null : (
          <Box
            position="absolute"
            top="10%"
            left="5%"
            display="flex"
            zIndex="1"
          >
            <SearchBar />
          </Box>
        )}

        <Text
          {...countriesNameFont}
          top="55%"
          left={isBreakPoint700 ? '53%' : '50%'}
        >
          {continentIcon[0]}
        </Text>
        <Text
          {...countriesNameFont}
          top={isBreakPoint400 ? '25%' : '35%'}
          left="20%"
        >
          {continentIcon[1]}
        </Text>
        <Text
          {...countriesNameFont}
          top={isBreakPoint700 ? '68%' : '73%'}
          right="15%"
          marginTop={isBreakPoint400 ? '2px' : ''}
        >
          {continentIcon[2]}
        </Text>
        <Text
          {...countriesNameFont}
          top={isBreakPoint400 ? '35%' : '40%'}
          right="30%"
        >
          {continentIcon[3]}
        </Text>
        <Text
          {...countriesNameFont}
          top={isBreakPoint400 ? '25%' : '30%'}
          right="35%"
        >
          {continentIcon[4]}
        </Text>
      </Box>
      {/* {isBreakPoint1600 ? (
        <Box
          width="100%"
          height="100px"
          marginTop="-5px"
          background="linear-gradient(to bottom, #C9D2D7, #FFE8DF)"
        />
      ) : null} */}

      {isBreakPoint1600 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          width="50%"
          marginLeft="auto"
          marginRight="auto"
          height="650px"
          marginTop="-5px"
        >
          <Box display="flex" gap="100px" marginBottom="50px">
            <FaPlaneArrival size="80" />
            <FaPlaneDeparture size="80" />
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            width={isBreakPoint350 ? '250px' : '350px'}
            height="200px"
            borderRadius="15px"
            {...MAIN_BACKGROUND_COLOR}
          >
            <Text>Search your country! </Text>
            <SearchBar />
          </Box>
          <Box display="flex" gap="100px" marginTop="50px">
            <RiShip2Fill size="80" />
            <FaTrainSubway size="80" />
          </Box>
        </Box>
      ) : null}

      <Footer />
    </Box>
  );
}

export default HomePage;

// ViewIcon;
