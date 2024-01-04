import { Box, Button } from '@chakra-ui/react';

function NextAndPreviousButton({ nextPage, prevPage }) {
  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <Button onClick={prevPage}>Delete</Button>
      <Button onClick={nextPage}>Load More</Button>
    </Box>
  );
}

export default NextAndPreviousButton;
