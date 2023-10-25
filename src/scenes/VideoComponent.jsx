import React from 'react';

const VideoComponent = ({ className, controls = false, src, type }) => (
  <video className={className} controls={controls} muted autoPlay loop>
    <source src={src} type={type} />
  </video>
);

export default VideoComponent;
