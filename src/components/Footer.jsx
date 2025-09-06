import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LuxuryEstates</h3>
            <p className="text-gray-400">
              Find your dream home with our premium real estate services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              
              <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Avenue</li>
              <li>Lucknow, Uttar Pradesh</li>
              <li>95559XXXXX</li>
              <li>avichaldwivedi2530@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxuryEstates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;