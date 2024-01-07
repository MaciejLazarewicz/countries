import { Box, Text } from '@chakra-ui/react';
import { FOOTER_FONT } from '../constants/Fonts';

function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = 'Maciej Lazarewicz';
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      backgroundColor="#000"
      height="55px"
      marginTop="15px"
    >
      <Box display="flex" flexDir="column" {...FOOTER_FONT}>
        <Box display="flex" gap="10px" marginTop="-5px" marginBottom="-10px">
          <Text> &copy; {currentYear}</Text>

          <Text>{authorName}</Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Text marginBottom="0">All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
