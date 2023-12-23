import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { FONTS } from '../constants/Fonts';

function Navbar() {
  return (
    <Box
      display="flex"
      flexDir="row"
      gap="15px"
      alignItems="center"
      backgroundColor="#2478D1"
    >
      <HamburgerIcon boxSize={45} />
      <Text {...FONTS}> Countries App</Text>
    </Box>
  );
}

export default Navbar;
