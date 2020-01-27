import * as React from 'react';
import './ArtistCard.css';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';
import { ArtistItem } from '@common/mappers/artist-mapper';

type Props = { artist: ArtistItem };

const ArtistCard = ({ artist }: Props) => {
  const history = useHistory();
  const { mainImage, name, id } = artist;

  return (
    <div className="ArtistCard" onClick={() => history.push(Routes.artist.getLink(id))}>
      <ImageWithFallback className="ArtistCard__image" src={mainImage} alt="Artist cover photo" fallbackText={name} />

      <h5 className="ArtistCard__name">{name}</h5>
    </div>
  );
};

export default ArtistCard;
