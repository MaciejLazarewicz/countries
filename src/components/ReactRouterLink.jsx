import { Link } from 'react-router-dom';

const ReactRouterLink = ({ to, children }) => {
  <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    {children}
  </Link>;
};
export default ReactRouterLink;
