import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { HAMBURGER_MENU_FONT } from '../constants/Fonts';

function HamburgerMenu() {
  return (
    <Box>
      <Menu>
        <MenuButton
          border="none"
          backgroundColor="transparent"
          cursor="pointer"
        >
          <HamburgerIcon color="#fff" boxSize={45} />
        </MenuButton>
        <MenuList width="100px">
          <MenuItem style={HAMBURGER_MENU_FONT}>Africa</MenuItem>

          <MenuItem style={HAMBURGER_MENU_FONT}>America</MenuItem>

          <MenuItem style={HAMBURGER_MENU_FONT}>Europe</MenuItem>

          <MenuItem style={HAMBURGER_MENU_FONT}>Asia</MenuItem>

          <MenuItem style={HAMBURGER_MENU_FONT}>Australia</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default HamburgerMenu;
