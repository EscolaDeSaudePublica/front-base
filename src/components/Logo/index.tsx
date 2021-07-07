import React, { ImgHTMLAttributes } from 'react';

const Logo: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img alt="Logo" src="/static/logo.svg" {...props} />;
};

export default Logo;
