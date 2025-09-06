const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-xl mb-8">Discover the perfect property that matches your lifestyle</p>
        
        {/* Search bar component would go here */}
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Enter location, city, or address" 
              className="flex-grow p-3 border rounded-md text-gray-800"
            />
            <select className="p-3 border rounded-md text-gray-800">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
            <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import SearchBar from './SearchBar';

// const Hero = ({ welcomeMessage }) => {
//   return (
//     <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')"}}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{welcomeMessage}</h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
//           Discover the perfect property that matches your lifestyle
//         </p>
        
//         {/* Search bar component */}
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
//           <SearchBar />
//         </div>

//         {/* Quick stats */}
//         <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
//           <div className="bg-blue-600 bg-opacity-70 p-3 rounded-lg">
//             <div className="text-2xl font-bold">500+</div>
//             <div className="text-sm">Properties</div>
//           </div>
//           <div className="bg-blue-600 bg-opacity-70 p-3 rounded-lg">
//             <div className="text-2xl font-bold">250+</div>
//             <div className="text-sm">Happy Clients</div>
//           </div>
//           <div className="bg-blue-600 bg-opacity-70 p-3 rounded-lg">
//             <div className="text-2xl font-bold">98%</div>
//             <div className="text-sm">Satisfaction</div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="animate-bounce">
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;