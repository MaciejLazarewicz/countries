import { useMediaQuery } from '@chakra-ui/react';

export const breakpoints = {
  isBreakPoint1600: '(max-width: 1600px)',
  isBreakPoint1200: '(max-width: 1200px)',
  isBreakPoint700: '(max-width: 700px)',
  isBreakPoint400: '(max-width: 400px)',
  isBreakPoint350: '(max-width: 350px)',
};

export const useBreakPoint = (breakpoint) => {
  return useMediaQuery(breakpoints[breakpoint]);
};
