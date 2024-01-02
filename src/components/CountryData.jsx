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
        console.log(responseData);
        setCountryData(responseData);
      } catch (error) {
        console.error('error:', error);
      }
    };
    const fetchGovernmentData = async () => {
      try {
        const response = await fetch('http://localhost:5000/government-type/');
        const governmentData = await response.json();
        console.log(governmentData);
        setGovernmentData(governmentData);
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
          />
        </Box>
      )}
    </Box>
  );
}

export default CountryData;
