import { useState } from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (name, value) => {
    const newFilters = {
      ...localFilters,
      [name]: value
    };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeChange = (values) => {
    const newFilters = {
      ...localFilters,
      priceRange: values
    };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      propertyType: 'all',
      priceRange: [0, 1000000],
      bedrooms: 0,
      bathrooms: 0
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button 
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Property Type Filter */}
        <div>
          <h4 className="font-medium mb-2">Property Type</h4>
          <div className="space-y-2">
            {['all', 'house', 'apartment', 'condo'].map(type => (
              <div key={type} className="flex items-center">
                <input
                  type="radio"
                  id={`type-${type}`}
                  name="propertyType"
                  checked={localFilters.propertyType === type}
                  onChange={() => handleChange('propertyType', type)}
                  className="mr-2"
                />
                <label htmlFor={`type-${type}`} className="capitalize">
                  {type === 'all' ? 'All Types' : type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="flex items-center justify-between mb-2">
            <span>${localFilters.priceRange[0].toLocaleString()}</span>
            <span>${localFilters.priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={localFilters.priceRange[1]}
            onChange={(e) => handlePriceRangeChange([localFilters.priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>

        {/* Bedrooms Filter */}
        <div>
          <h4 className="font-medium mb-2">Bedrooms</h4>
          <select
            value={localFilters.bedrooms}
            onChange={(e) => handleChange('bedrooms', parseInt(e.target.value))}
            className="w-full p-2 border rounded-md"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Bathrooms Filter */}
        <div>
          <h4 className="font-medium mb-2">Bathrooms</h4>
          <select
            value={localFilters.bathrooms}
            onChange={(e) => handleChange('bathrooms', parseInt(e.target.value))}
            className="w-full p-2 border rounded-md"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;