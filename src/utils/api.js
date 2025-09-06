// Mock API functions - in a real app, these would make actual API calls

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock properties data
const mockProperties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    price: 350000,
    location: "Downtown, New York",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "apartment",
    description: "Beautiful modern apartment in the heart of downtown with stunning city views. Recently renovated with high-end finishes and appliances. Close to restaurants, shopping, and public transportation.",
    features: ["Air Conditioning", "Balcony", "Hardwood Floors", "In-unit Laundry", "Parking", "Pet Friendly", "Fitness Center", "Swimming Pool"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    dateAdded: "2023-05-15"
  },
  {
    id: 2,
    title: "Luxury Villa with Ocean View",
    price: 1200000,
    location: "Malibu, California",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    type: "house",
    description: "Stunning luxury villa with panoramic ocean views. Features a gourmet kitchen, home theater, wine cellar, and infinity pool. Private beach access and spacious outdoor entertaining areas.",
    features: ["Ocean View", "Infinity Pool", "Home Theater", "Wine Cellar", "Gourmet Kitchen", "Private Beach Access", "Smart Home System", "Guest House"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      "https://images.unsplash.com/photo-1600566753052-dc5ad2c1732b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    dateAdded: "2023-05-10"
  },
  {
    id: 3,
    title: "Charming Downtown Condo",
    price: 275000,
    location: "Chicago, Illinois",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    type: "condo",
    description: "Charming condo in the heart of downtown. Recently updated with modern amenities while maintaining historic character. Walk to restaurants, theaters, and public transportation.",
    features: ["Hardwood Floors", "Updated Kitchen", "Historic Building", "Walk Score: 98", "Rooftop Access", "Storage Unit", "Pet Friendly", "In-unit Laundry"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560448076-3f6f44b6b4a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    ],
    dateAdded: "2023-05-05"
  }
];

// Mock testimonials data
const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Home Buyer",
    content: "LuxuryEstates helped us find our dream home in just two weeks. Their agents were knowledgeable and attentive to our needs.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Property Investor",
    content: "I've worked with many real estate companies, but LuxuryEstates stands out for their professionalism and market expertise.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "First-time Buyer",
    content: "As a first-time home buyer, I was nervous about the process. The team at LuxuryEstates guided me through every step.",
    rating: 4
  }
];

// Mock features data
import { DatabaseIcon, AgentIcon, SearchIcon } from "../components/FeatureIcons";

const mockFeatures = [
  {
    id: 1,
    title: "Extensive Property Database",
    description: "Access thousands of properties with detailed information and high-quality photos.",
    icon: DatabaseIcon,
  },
  {
    id: 2,
    title: "Expert Agents",
    description: "Our experienced agents provide personalized service and deep market knowledge.",
    icon: AgentIcon,
  },
  {
    id: 3,
    title: "Advanced Search Tools",
    description: "Filter properties by price, location, features, and more to find exactly what you're looking for.",
    icon: SearchIcon,
  }
];

// API functions
export const getProperties = async () => {
  await delay(500); // Simulate network delay
  return mockProperties;
};

export const getProperty = async (id) => {
  await delay(300);
  const property = mockProperties.find(p => p.id === parseInt(id));
  if (!property) {
    throw new Error('Property not found');
  }
  return property;
};

export const getTestimonials = async () => {
  await delay(400);
  return mockTestimonials;
};

export const getFeatures = async () => {
  await delay(200);
  return mockFeatures;
};

export const loginUser = async (credentials) => {
  await delay(800); // Simulate authentication process
  
  // Mock validation - in a real app, this would call an authentication API
  if (credentials.email === 'user@example.com' && credentials.password === 'password') {
    return {
      id: 1,
      name: 'John Doe',
      email: credentials.email,
      token: 'mock-jwt-token'
    };
  } else {
    throw new Error('Invalid email or password');
  }
};

export const registerUser = async (userData) => {
  await delay(800); // Simulate registration process
  
  // Mock registration - in a real app, this would call a registration API
  return {
    id: Date.now(),
    name: userData.name,
    email: userData.email,
    token: 'mock-jwt-token'
  };
};

export const sendContactMessage = async (messageData) => {
  await delay(600); // Simulate email sending
  
  // Mock email sending - in a real app, this would integrate with EmailJS or similar
  console.log('Contact message sent:', messageData);
  return { success: true };
};