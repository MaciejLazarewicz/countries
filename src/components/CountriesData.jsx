import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Countries from '../Pages/Countries';
import Navbar from './Navbar';

function CountriesData() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [flags, setFlags] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/data`);
        const responseData = await response.json();

        const countriesArray = responseData.data || [];

        setCountryData(countriesArray);
      } catch (error) {
        console.error('error:', error);
      }
    };
    fetchCountryData();
  }, [name]);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/flags/`);
        const responseData = await response.json();

        const countriesArray = responseData.data || [];

        setFlags(countriesArray);
      } catch (error) {
        console.error('error:', error);
      }
    };
    fetchCountryData();
  }, [name]);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(350px,1fr))"
        justifyItems="center"
        marginTop="50px"
      >
        {countryData &&
          countryData.map((country) => {
            const correctFlag =
              flags?.find((flag) => flag.country === country.country) || '';

            return (
              <Box key={country.country}>
                <Countries
                  name={name}
                  country={country.country}
                  abbreviation={country.abbreviation}
                  population={country.population}
                  capital={country.capital}
                  flag={correctFlag.flagBase64}
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default CountriesData;
