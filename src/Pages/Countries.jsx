import { Box, Text } from '@chakra-ui/react';
import ReactRouterLink from '../components/ReactRouterLink';

function Countries({ country, abbreviation, population, capital, flag }) {
  return (
    <ReactRouterLink to={`/Country/${country.toLowerCase()}`}>
      <Box>
        <Box display="flex" flexDir="column" alignItems="center">
          <Text>
            {country} {abbreviation}
          </Text>

          <Text> {population}</Text>

          <Text>{capital}</Text>
        </Box>
      </Box>
    </ReactRouterLink>
  );
}

export default Countries;
