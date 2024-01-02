import { Box } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Country from '../Pages/Country';

function CountryData() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [governmentData, setGovernmentData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/data/${name}`);
        const responseData = await response.json();
        setCountryData(responseData);
      } catch (error) {
        console.error('error:', error);
      }
    };
    const fetchGovernmentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/government-type/${name}`
        );
        const governmentData = await response.json();
        setGovernmentData(governmentData[0]);
      } catch (error) {
        console.error('error:', error);
      }
    };
    fetchGovernmentData();

    fetchCountryData();
  }, [name]);

  return (
    <Box>
      {countryData && governmentData && (
        <Box key={countryData.country}>
          <Country
            name={name}
            country={countryData.country}
            abbreviation={countryData.abbreviation}
            population={countryData.population}
            capital={countryData.capital}
            flag={`http://localhost:5000/flags/${countryData.country.toLowerCase()}`}
            languages={countryData.language}
            cities={countryData.cities}
            coordinates={countryData.coordinates}
            government={governmentData.government}
          />
        </Box>
      )}
    </Box>
  );
}

export default CountryData;
