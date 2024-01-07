import { Text, Image, Card, CardBody, Heading } from '@chakra-ui/react';
import ReactRouterLink from '../components/ReactRouterLink';
import { COUNTRIES_DESCRIPTION_FONT } from '../constants/Fonts';
import { COUNTRIES_CARD_BACKGROUND_COLOR } from '../constants/Colors';

function Countries({ country, abbreviation, population, capital, flag }) {
  return (
    <Card
      width="80%"
      style={{
        ...COUNTRIES_DESCRIPTION_FONT,
      }}
      {...COUNTRIES_CARD_BACKGROUND_COLOR}
    >
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
