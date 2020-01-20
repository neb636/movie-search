import * as React from 'react';
import './ArtistCard.css';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';
import { ArtistItem } from '@common/mappers/artist-mapper';
import { useRandomFallbackGradient } from '@common/hooks/use-random-fallback-gradient';

type Props = { artist: ArtistItem };

const ArtistCard = ({ artist }: Props) => {
  const history = useHistory();
  const { mainImage, name, type, id } = artist;
  const fallbackLetter = name ? name.charAt(0) : '?';
  const fallbackGradient = useRandomFallbackGradient();
  const style = {
    backgroundImage: fallbackGradient
  };

  return (
    <div className="ArtistCard" onClick={() => history.push(Routes.artist.getLink(id))}>
      <ImageWithFallback
        className="ArtistCard__image"
        src={mainImage}
        alt="Artist cover photo"
        fallback={
          <div className="ArtistCard__image-fallback" style={style}>
            {fallbackLetter}
          </div>
        }
      />

      <h5 className="ArtistCard__name">{name}</h5>
    </div>
  );
};

export default ArtistCard;
