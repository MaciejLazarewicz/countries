import { Box } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Country from '../Pages/Country';

function CountryData() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [governmentData, setGovernmentData] = useState(null);
  const [flags, setFlags] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countryResponse, flagResponse, governmentResponse] =
          await Promise.all([
            fetch(`http://localhost:5000/data/${name}`),
            fetch(`http://localhost:5000/flags/${name}`),
            fetch(`http://localhost:5000/government-type/${name}`),
          ]);

        const countryData = await countryResponse.json();
        setCountryData(countryData);

        const flagData = await flagResponse.json();

        setFlags(flagData);

        const governmentData = await governmentResponse.json();
        setGovernmentData(governmentData[0]);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchData();
  }, [name]);

  const allData = countryData && governmentData && flags;

  return (
    <Box>
      {allData && (
        <Box key={countryData.country}>
          <Country
            name={name}
            country={countryData.country}
            abbreviation={countryData.abbreviation}
            population={countryData.population}
            capital={countryData.capital}
            languages={countryData.language}
            cities={countryData.cities}
            coordinates={countryData.coordinates}
            government={governmentData.government}
            flag={flags.flagBase64}
          />
        </Box>
      )}
    </Box>
  );
}

export default CountryData;
