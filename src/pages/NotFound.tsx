
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light">
      <div className="text-center px-4">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="#1E5F9E" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-primary-blue">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-block gradient-bg text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
