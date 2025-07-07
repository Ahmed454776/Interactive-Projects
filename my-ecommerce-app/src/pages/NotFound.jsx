import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-heading">Page Not Found</h2>
      <p className="not-found-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="back-home-btn">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
