import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CountriesData from './components/CountriesData';

import CountryData from './components/CountryData';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/CountriesData',
    element: <CountriesData />,
  },
  {
    path: '/Country/:name',
    element: <CountryData />,
  },
  {
    path: '/Countries/:page',
    element: <CountriesData />,
  },
]);

export default router;
