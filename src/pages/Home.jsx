import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PropertyCard from '../components/PropertyCard';
import { properties, features } from '../data/mockData';

const Home = () => {
  const { currentUser } = useAuth();
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    if (currentUser) {
      setWelcomeMessage('Welcome to the Real Estate Properties');
    } else {
      setWelcomeMessage('Find Your Dream Home');
    }
  }, [currentUser]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{welcomeMessage}</h1>
          <p className="text-xl mb-8">Discover the perfect property that matches your lifestyle</p>
          <a href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-block">
            Browse Properties
          </a>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-block">
              View All Properties
            </a>
          </div>
        </div>
      </section>
      
      {/* Enhanced Features/Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Excellence in <span className="text-blue-600">Real Estate</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who trust us with their most important investment decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Expert Market Knowledge */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl">🎯</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Expert Market Knowledge
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Our team of certified real estate professionals brings years of local market expertise, ensuring you get the best deals and insider knowledge of neighborhood trends and property values.
                </p>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Personalized Service */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl">💼</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Personalized Service
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  We understand every client is unique. Our dedicated agents work closely with you to understand your specific needs, budget, and preferences to find the perfect property match.
                </p>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Technology Advantage */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl">🚀</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Technology Advantage
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Leverage cutting-edge technology with virtual tours, AI-powered property matching, instant market analytics, and mobile-first platform for seamless property searching experience.
                </p>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Comprehensive Support */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl">🛡️</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Comprehensive Support
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  From initial consultation to closing and beyond, we provide end-to-end support including legal assistance, financing guidance, inspection coordination, and post-purchase services.
                </p>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Your Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let us help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-block">
              Browse Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;