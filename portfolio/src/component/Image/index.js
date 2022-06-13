import React from "react";

const Image = ({ alt, src, width, height }) => {
  return (
    <div>
      <img alt={alt} src={src} style={{ height: height, width: width }} />
    </div>
  );
};

export default Image;