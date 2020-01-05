import * as React from 'react';
import './ArtistCard.css';
import { ArtistItem } from '@state/music/interfaces';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';

type Props = { artist: ArtistItem };

const ArtistCard = ({ artist }: Props) => {
  const { mainImage, name, type } = artist;
  const fallbackLetter = name ? name.charAt(0) : '?';

  return (
    <div className="ArtistCard">
      <ImageWithFallback
        className="ArtistCard__image"
        src={mainImage}
        alt="Artist cover photo"
        fallback={<div className="ArtistCard__image-fallback">{fallbackLetter}</div>}
      />

      <h5 className="ArtistCard__name">{name}</h5>
    </div>
  );
};

export default ArtistCard;
