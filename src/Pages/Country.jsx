import { Box, Text, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

function Country({
  country,
  population,
  abbreviation,
  flag,
  capital,
  coordinates,
  cities,
  government,
  name,
  languages,
}) {
  return (
    <Box>
      <Navbar />
      <Box>
        <Text>{country}</Text>
        <Text>{government}</Text>
        <Text>{capital}</Text>
        <Text>{abbreviation}</Text>
        <Text>{languages}</Text>
        <Text>{cities}</Text>

        <Image src={flag} style={{ width: '500px', height: '500px' }} />
      </Box>
    </Box>
  );
}

Country.propTypes = {
  coordinates: PropTypes.shape({
    north: PropTypes.number.isRequired,
    south: PropTypes.number.isRequired,
    west: PropTypes.number.isRequired,
    east: PropTypes.number.isRequired,
  }),
};

export default Country;
