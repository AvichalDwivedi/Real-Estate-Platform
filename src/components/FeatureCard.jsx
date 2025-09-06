// const FeatureCard = ({ feature }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="flex justify-center mb-4">
//         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//           {feature.icon && <feature.icon />}
//         </div>
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//       <p className="text-gray-600">{feature.description}</p>
//     </div>
//   );
// };

// export default FeatureCard;




const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;