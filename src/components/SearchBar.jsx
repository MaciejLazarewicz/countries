import { useRef, useState, useEffect } from 'react';
import { Box, Text, Input, InputGroup, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [countryName, setCountryName] = useState('');
  const [countryExists, setCountryExists] = useState(true);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleSearch = async () => {
    if (countryName.trim() !== '') {
      try {
        const response = await fetch(
          `http://localhost:5000/data/${countryName}`
        );
        const responseData = await response.json();

        if (response.status === 404 || !responseData.country) {
          setCountryExists(false);
        } else {
          navigate(`/country/${countryName}`);
        }
      } catch (error) {
        console.error('error:', error);
      }
    } else {
      setCountryExists(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setCountryExists(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Box display="flex" flexDir="column" ref={containerRef}>
      <Box display="flex" gap="5px" border="1px solid #000" width="150px">
        <InputGroup alignItems="center">
          <Image
            marginLeft="5px"
            width="20px"
            height="20px"
            src="../src/assets/earth.png"
          />

          <Input
            type="text"
            placeholder="Search!"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            onKeyDown={handleKeyDown}
            fontSize="24px"
            marginLeft="5px"
            variant="unstyled"
            border="none"
            outline="none"
            width="100%"
            backgroundColor="inherit"
            color="#000"
          />
        </InputGroup>
      </Box>
      {!countryExists && (
        <Box display="flex" justifyContent="center" marginTop="-10px">
          <Text color="#FF0000" fontSize="18px" fontWeight="bold">
            Try Again!
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
