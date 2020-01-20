import * as React from 'react';
import './TrackCard.css';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';
import { TrackItem } from '@common/mappers/track-mapper';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';

type Props = { track: TrackItem };

const TrackCard = ({ track }: Props) => {
  const { mainImage, name, artistName, id } = track;
  const history = useHistory();
  const firstLetter = name ? name.charAt(0) : '?';

  return (
    <div className="TrackCard" onClick={() => history.push(Routes.track.getLink(id))}>
      <div className="TrackCard__background" />

      <ImageWithFallback className="TrackCard__image" src={mainImage} fallback={<div>firstLetter</div>} alt="Song Cover Photo" />

      <div className="TrackCard__meta-data">
        <div className="TrackCard__track-name">{name}</div>
        <div className="TrackCard__artist-name">{artistName}</div>
      </div>
    </div>
  );
};

export default TrackCard;
