import { Box, Text, Image, Card, CardBody, Heading } from '@chakra-ui/react';
import ReactRouterLink from '../components/ReactRouterLink';

function Countries({ country, abbreviation, population, capital, flag }) {
  return (
    <Card width="80%" border="2px solid #f51">
      <ReactRouterLink to={`/Country/${country.toLowerCase()}`}>
        <CardBody display="flex" flexDir="column" alignItems="center">
          <Heading> {country} </Heading>
          <Text>Population: {population}</Text>
          <Text>Capital: {capital}</Text>
          <Image
            src={flag}
            alt={country + ' flag'}
            style={{ width: '100px', height: '100px' }}
          />
        </CardBody>
      </ReactRouterLink>
    </Card>
  );
}

export default Countries;
