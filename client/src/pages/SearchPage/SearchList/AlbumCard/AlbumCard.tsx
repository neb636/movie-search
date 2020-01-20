import * as React from 'react';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';
import { useRandomFallbackGradient } from '@common/hooks/use-random-fallback-gradient';
import { AlbumItem } from '@common/mappers/album-mapper';
import './AlbumCard.css';

type Props = { album: AlbumItem };

const AlbumCard = ({ album }: Props) => {
  const history = useHistory();
  const { mainImage, name, id } = album;
  const fallbackLetter = name ? name.charAt(0) : '?';
  const fallbackGradient = useRandomFallbackGradient();
  const style = {
    backgroundImage: fallbackGradient
  };

  return (
    <div className="AlbumCard" onClick={() => history.push(Routes.artist.getLink(id))}>
      <ImageWithFallback
        className="AlbumCard__image"
        src={mainImage}
        alt="Album cover photo"
        fallback={
          <div className="AlbumCard__image-fallback" style={style}>
            {fallbackLetter}
          </div>
        }
      />

      <div className="AlbumCard__name">{name}</div>
    </div>
  );
};

export default AlbumCard;
