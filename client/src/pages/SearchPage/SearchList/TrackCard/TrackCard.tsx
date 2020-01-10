import * as React from 'react';
import './TrackCard.css';
import { TrackItem } from '@state/music/interfaces';
import { Routes } from '@routes/routes';
import { useHistory } from 'react-router-dom';

type Props = { track: TrackItem };

const TrackCard = ({ track }: Props) => {
  const { mainImage, name, artistName, id } = track;
  const history = useHistory();

  return (
    <div className="TrackCard" onClick={() => history.push(Routes.track.getLink(id))}>
      <img className="TrackCard__image" src={mainImage} alt="Song Cover Photo" />

      <div className="TrackCard__meta-data">
        <div className="TrackCard__artist-name">{artistName}</div>
        <div className="TrackCard__track-name">{name}</div>
      </div>
    </div>
  );
};

export default TrackCard;
