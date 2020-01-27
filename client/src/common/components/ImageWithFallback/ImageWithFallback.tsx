import React, { useState } from 'react';
import { useRandomFallbackGradient } from '@common/hooks/use-random-fallback-gradient';
import './ImageWithFallback.css';

type Props = {
  src: string | undefined;
  alt: string;
  fallbackText: string;
  [key: string]: any;
};

const ImageWithFallback = (props: Props) => {
  const { fallbackText, src, alt, className, ...rest } = props;
  const [loadError, setLoadError] = useState(!src);
  const fallbackGradient = useRandomFallbackGradient();
  const style = {
    backgroundImage: fallbackGradient
  };

  const onError = () => {
    console.log('ERROR');
    setLoadError(true);
  };

  if (loadError) {
    const fallbackLetter = fallbackText ? fallbackText.charAt(0) : '?';

    return (
      <div className={`${className} ImageWithFallback__fallback`} style={style}>
        {fallbackLetter}
      </div>
    );
  }

  return <img alt={alt} src={src} onError={onError} className={className} {...rest} />;
};

export default ImageWithFallback;
