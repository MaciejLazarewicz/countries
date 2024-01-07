import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Countries from '../Pages/Countries';
import Navbar from './Navbar';
import NextAndPreviousButton from './NextAndPreviousButton';
import { MAIN_BACKGROUND_COLOR } from '../constants/Colors';
import Footer from './Footer';

function CountriesData() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [flags, setFlags] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const countryResponse = await fetch(
        `http://localhost:5000/data?page=${currentPage}&limit=20`
      );
      const countryData = await countryResponse.json();
      const countriesArray = countryData.data || [];

      setCountryData(countriesArray);

      const flagResponse = await fetch(
        `http://localhost:5000/flags/?page=${currentPage}`
      );
      const flagData = await flagResponse.json();
      const flagsArray = flagData.data || [];

      setFlags(flagsArray);
    } catch (error) {
      console.error('Error during data fetch:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Box width="100%" {...MAIN_BACKGROUND_COLOR}>
      <Navbar />

      <NextAndPreviousButton
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        isPrevButtonDisabled={currentPage <= 1}
      />

      <Box
        width="100%"
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(350px,1fr))"
        justifyItems="center"
        marginTop="30px"
        gap="50px"
      >
        {Boolean(countryData) &&
          countryData.map((country) => {
            const correctFlag =
              flags?.find((flag) => flag.country === country.country) || '';

            return (
              <Countries
                key={country.country}
                name={name}
                country={country.country}
                population={country.population}
                capital={country.capital}
                flag={correctFlag.flagBase64}
              />
            );
          })}
      </Box>

      <Footer />
    </Box>
  );
}

export default CountriesData;
