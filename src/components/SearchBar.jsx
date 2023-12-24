import { Box, Input, Image } from '@chakra-ui/react';

function SearchBar() {
  return (
    <Box display="flex" alignItems="center" gap="5px">
      <Image src="../src/assets/earth.png" />
      <Input
        fontSize="24px"
        variant="unstyled"
        border="none"
        outline="none"
        color="#fff"
        _focus={{
          backgroundColor: '#505050',
        }}
      />
    </Box>
  );
}

export default SearchBar;
