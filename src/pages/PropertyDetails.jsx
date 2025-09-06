import { useParams } from 'react-router-dom';
import { properties } from '../data/mockData';
import ImageGallery from '../components/ImageGallery';
import PropertyCard from '../components/PropertyCard';
import { useState, useEffect } from 'react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if property is in favorites
  useEffect(() => {
    if (property) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavorite(favorites.some(fav => fav.id === property.id));
    }
  }, [property]);

  // Toggle favorite
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== property.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const newFavorite = {
        id: property.id,
        title: property.title,
        price: property.price,
        image: property.images[0],
        location: property.location
      };
      const updatedFavorites = [...favorites, newFavorite];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Property not found</div>;
  }
  
  // Find similar properties (same type, excluding current)
  const similarProperties = properties
    .filter(p => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a> &gt; 
        <a href="/properties" className="hover:text-blue-600"> Properties</a> &gt; 
        <span> {property.title}</span>
      </nav>
      
      {/* Property title and price */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-2xl text-blue-600 font-semibold">${property.price.toLocaleString()}</p>
          <p className="text-gray-600">{property.location}</p>
        </div>
        <button
          onClick={toggleFavorite}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg 
            className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
            fill={isFavorite ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{isFavorite ? 'Saved' : 'Save'}</span>
        </button>
      </div>
      
      {/* Image gallery */}
      <ImageGallery images={property.images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left column - Property details */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-gray-500">Bedrooms</p>
                <p className="font-semibold">{property.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Bathrooms</p>
                <p className="font-semibold">{property.bathrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Area</p>
                <p className="font-semibold">{property.area} sq ft</p>
              </div>
              <div>
                <p className="text-gray-500">Type</p>
                <p className="font-semibold capitalize">{property.type}</p>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-700">{property.description}</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar properties */}
      {similarProperties.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;