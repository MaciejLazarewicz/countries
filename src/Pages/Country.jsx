import { Box, Text } from '@chakra-ui/react';
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
}) {
  console.log(government);
  return (
    <Box>
      <Navbar />
      <Text>
        {country}
        {abbreviation}
        {capital}
        {coordinates.north}
      </Text>

      {coordinates.south}
      <Text>{government}</Text>
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
