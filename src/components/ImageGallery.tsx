import React from 'react';
import Photo1 from './images/photo_2025-02-13_09-05-14.jpg';
import Photo2 from './images/photo_2025-02-13_09-05-48.jpg';
import Photo3 from './images/photo_2025-02-13_09-05-53.jpg';
import Photo4 from './images/photo_2025-02-13_09-05-58.jpg';
import Photo5 from './images/photo_2025-02-13_09-06-02.jpg';
import Photo6 from './images/photo_2025-02-13_09-06-06.jpg';
import Photo7 from './images/photo_2025-02-13_09-06-10.jpg';
import Photo8 from './images/photo_2025-02-13_09-06-24.jpg';
import Photo9 from './images/photo_2025-02-13_09-06-29.jpg';
import Photo10 from './images//photo_2025-02-13_09-06-32.jpg';
import Photo11 from './images/photo_2025-02-13_09-06-48.jpg';
import Photo13 from './images/image.png'
import Photo14 from './images/image copy.png'
// import Photo15 from './images/image copy 2.png'


const images = [
  { url: Photo1, title: "Market Insights", description: "Latest trends and updates" },
  { url: Photo2, title: "Community", description: "Join Our Growing Family" },
  { url: Photo3, title: "Analysis", description: "Expert Insights" },
  { url: Photo4, title: "Innovation", description: "Future of Finance" },
  { url: Photo5, title: "Growth", description: "Expand your portfolio" },
  { url: Photo6, title: "Security", description: "Top-notch protection" },
  { url: Photo7, title: "Technology", description: "Cutting-edge solutions" },
  { url: Photo8, title: "Networking", description: "Connect with experts" },
  { url: Photo9, title: "Education", description: "Learn and grow" },
  { url: Photo10, title: "Collaboration", description: "Work with pioneers" },
  { url: Photo11, title: "Strategy", description: "Plan for success" },
  { url: Photo13, title: "Strategy", description: "Plan for success" },
  { url: Photo14, title: "Strategy", description: "Plan for success" },
  // { url: Photo15, title: "Strategy", description: "Plan for success" },
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
    title: "Crypto Trading",
    description: "24/7 Market Updates"
  },
];

const ImageGallery = () => {
  return (
    <section className="py-20 relative">
              <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our LiveStream Gallery
          </h2>
        </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
