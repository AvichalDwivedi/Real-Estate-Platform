import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      {/* Main Image */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src={images[selectedImage]} 
          alt="Property" 
          className="w-full h-96 object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`cursor-pointer border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;