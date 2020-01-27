import * as React from 'react';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';
import { AlbumItem } from '@common/mappers/album-mapper';
import './AlbumCard.css';

type Props = { album: AlbumItem };

const AlbumCard = ({ album }: Props) => {
  const history = useHistory();
  const { mainImage, name, id } = album;

  return (
    <div className="AlbumCard" onClick={() => history.push(Routes.artist.getLink(id))}>
      <ImageWithFallback className="AlbumCard__image" src={mainImage} alt="Album cover photo" fallbackText={name} />

      <div className="AlbumCard__name">{name}</div>
    </div>
  );
};

export default AlbumCard;
