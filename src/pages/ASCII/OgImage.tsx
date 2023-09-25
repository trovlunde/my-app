import React from 'react';

interface OriginalImageProps {
  src: string;
  alt: string;
}

const OriginalImage: React.FC<OriginalImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="original-image" />
  );
}

export default OriginalImage;