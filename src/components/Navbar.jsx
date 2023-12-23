import { Box, Text, Image } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import { NAVBAR_FONT } from '../constants/Fonts';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function Navbar() {
  return (
    <Box backgroundColor="#2478D1">
      <Box
        display="flex"
        flexDir="row"
        alignItems="center"
        marginLeft="15px"
        gap="15px"
      >
        <HamburgerMenu />
        <Box display="flex" alignItems="center" gap="4px">
          <Text {...NAVBAR_FONT}>C</Text>
          <Image
            src="/src/assets/Worldwide.png"
            width="24px"
            height="24px"
            css={{ animation: `${rotate} 5s linear infinite` }}
          />
          <Text {...NAVBAR_FONT}>untries App</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
