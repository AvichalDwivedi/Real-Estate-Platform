// Application constants

export const PROPERTY_TYPES = [
  { value: 'all', label: 'All Types' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' }
];

export const PRICE_RANGES = [
  { label: 'Under $100,000', min: 0, max: 100000 },
  { label: '$100,000 - $200,000', min: 100000, max: 200000 },
  { label: '$200,000 - $300,000', min: 200000, max: 300000 },
  { label: '$300,000 - $400,000', min: 300000, max: 400000 },
  { label: '$400,000 - $500,000', min: 400000, max: 500000 },
  { label: 'Over $500,000', min: 500000, max: 10000000 }
];

export const BEDROOM_OPTIONS = [
  { value: 0, label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
  { value: 5, label: '5+' }
];

export const BATHROOM_OPTIONS = [
  { value: 0, label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' }
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
];