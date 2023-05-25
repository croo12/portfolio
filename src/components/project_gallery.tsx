import React, { useState } from 'react';
import type { FC } from 'react';

let useSwipeable: any;

if (typeof window !== 'undefined') {
  useSwipeable = require('react-swipeable').useSwipeable;
}

const ProjectGallery: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/image1.jpg', '/images/image2.jpg'];
  
  const handlers = useSwipeable ? useSwipeable({
    onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  }) : {};

  return (
    <div style={{ display: 'flex' }}>
      <div {...handlers} style={{ flex: 1 }}>
        <img src={images[currentImageIndex]} alt="Gallery" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ flex: 1 }}>
        <iframe src="https://github.com" title="GitHub" style={{ width: '100%', height: '600px' }} />
      </div>
    </div>
  );
};

export default ProjectGallery;
