import { Link } from 'react-router-dom';

const ReactRouterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
    >
      {children}
    </Link>
  );
};
export default ReactRouterLink;
