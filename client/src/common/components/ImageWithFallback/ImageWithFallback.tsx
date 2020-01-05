import React, { ReactNode, useState } from 'react';

type Props = {
  src: string | undefined;
  fallback: ReactNode | Element[];
  alt: string;
  [key: string]: any;
};

const ImageWithFallback = (props: Props) => {
  const { fallback, src, alt, className, ...rest } = props;
  const [loadError, setLoadError] = useState(!src);

  const onError = () => {
    console.log('ERROR');
    setLoadError(true);
  };

  if (loadError) {
    return <div className={className}>{fallback}</div>;
  }

  return <img alt={alt} src={src} onError={onError} className={className} {...rest} />;
};

export default ImageWithFallback;
