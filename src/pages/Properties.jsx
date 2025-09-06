import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import FilterSidebar from '../components/FilterSidebar';
import { properties } from '../data/mockData';

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    propertyType: 'all',
    priceRange: [0, 1000000],
    bedrooms: 0,
    bathrooms: 0
  });

  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Apply URL search parameters if they exist
    const urlLocation = searchParams.get('location');
    const urlType = searchParams.get('type');
    const urlMinPrice = searchParams.get('minPrice');
    const urlMaxPrice = searchParams.get('maxPrice');

    let newFilters = { ...filters };

    if (urlType) newFilters.propertyType = urlType;
    if (urlMinPrice || urlMaxPrice) {
      newFilters.priceRange = [
        urlMinPrice ? parseInt(urlMinPrice) : 0,
        urlMaxPrice ? parseInt(urlMaxPrice) : 1000000
      ];
    }

    setFilters(newFilters);
    applyFilters(newFilters, urlLocation);
  }, [searchParams]);

  const applyFilters = (newFilters, searchLocation = '') => {
    setFilters(newFilters);
    
    let result = properties.filter(property => {
      // Location search
      if (searchLocation && !property.location.toLowerCase().includes(searchLocation.toLowerCase())) {
        return false;
      }
      
      // Property type filter
      if (newFilters.propertyType !== 'all' && property.type !== newFilters.propertyType) {
        return false;
      }
      
      // Price range filter
      if (property.price < newFilters.priceRange[0] || property.price > newFilters.priceRange[1]) {
        return false;
      }
      
      // Bedrooms filter
      if (newFilters.bedrooms > 0 && property.bedrooms < newFilters.bedrooms) {
        return false;
      }
      
      // Bathrooms filter
      if (newFilters.bathrooms > 0 && property.bathrooms < newFilters.bathrooms) {
        return false;
      }
      
      return true;
    });
    
    // Apply sorting
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }
    
    setFilteredProperties(result);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    applyFilters(filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Properties</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar filters={filters} onFilterChange={applyFilters} />
        </div>
        
        {/* Property listing */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{filteredProperties.length} properties found</p>
            
            <select 
              value={sortBy} 
              onChange={handleSortChange}
              className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No properties match your filters.</p>
              <button 
                onClick={() => {
                  applyFilters({
                    propertyType: 'all',
                    priceRange: [0, 1000000],
                    bedrooms: 0,
                    bathrooms: 0
                  });
                  setSearchParams({});
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;