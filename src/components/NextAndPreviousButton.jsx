import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function NextAndPreviousButton({ nextPage, prevPage, isPrevButtonDisabled }) {
  const chevronCommonStyles = {
    boxSize: 50,
    cursor: 'pointer',
    color: '#0D131A',
    _hover: { color: '#F50057' },
  };
  return (
    <Box width="100%" marginTop="30px" display="flex" justifyContent="flex-end">
      {!isPrevButtonDisabled && (
        <ChevronLeftIcon onClick={prevPage} sx={chevronCommonStyles} />
      )}

      <ChevronRightIcon onClick={nextPage} sx={chevronCommonStyles} />
    </Box>
  );
}

export default NextAndPreviousButton;
