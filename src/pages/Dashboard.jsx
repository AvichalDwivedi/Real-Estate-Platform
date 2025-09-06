import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // User data state
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Initialize user data
  useEffect(() => {
    if (currentUser) {
      setUserData({
        name: currentUser.name || 'User',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        address: currentUser.address || ''
      });
    }
  }, [currentUser]);

  // Get favorites from localStorage
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Contact information
  const contactInfo = {
    name: 'Avichal Dwivedi',
    phone: '95559XXXXX',
    address: '123 Real Estate Avenue, Lucknow, Uttar Pradesh'
  };

  // Handle input changes for profile editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save profile changes
  const handleSaveProfile = () => {
    // In a real app, you would save to your backend here
    console.log('Saving profile:', userData);
    setIsEditing(false);
    // Update context if needed
  };

  // Remove favorite
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // View property
  const viewProperty = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-2">Welcome , Let's find your perfect property today</h2>
        <p className="text-blue-100">Manage your account and favorite properties.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {userData.name ? userData.name.charAt(0) : 'U'}
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">{userData.name}</h2>
                <p className="text-gray-600 text-sm">{userData.email || 'user@example.com'}</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'favorites' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                Favorites ({favorites.length})
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'contact' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                Contact Info
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Profile Information</h2>
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button 
                      onClick={handleSaveProfile}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="p-3 bg-gray-100 rounded-md">{userData.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="p-3 bg-gray-100 rounded-md">{userData.email || 'Not set'}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="p-3 bg-gray-100 rounded-md">{userData.phone || 'Not set'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    />
                  ) : (
                    <p className="p-3 bg-gray-100 rounded-md">{userData.address || 'Not set'}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'favorites' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Favorite Properties</h2>
                {favorites.length > 0 && (
                  <button 
                    onClick={() => {
                      setFavorites([]);
                      localStorage.removeItem('favorites');
                    }}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {favorites.map(property => (
                    <div key={property.id} className="flex items-center p-4 border rounded-md hover:bg-gray-50">
                      <img src={property.image} alt={property.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-gray-600">${property.price.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => viewProperty(property.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => removeFavorite(property.id)}
                          className="text-red-600 hover:text-red-800 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">You haven't saved any properties yet.</p>
              )}
            </div>
          )}
          
          {activeTab === 'contact' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-4">Your dedicated agent</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="font-medium">Name:</span>
                    <span className="ml-2">{contactInfo.name}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="font-medium">Address:</span>
                    <span className="ml-2">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;