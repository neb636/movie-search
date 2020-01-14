import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './ArtistInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import { useArtistQuery } from 'graphql/querys/artist-query';

const ArtistInfoPage = () => {
  const { spotifyArtistId } = useParams<{ spotifyArtistId?: string }>();
  const history = useHistory();
  const { artist, loading, error } = useArtistQuery(spotifyArtistId || '');
  const fallbackLetter = artist?.name?.charAt(0) || '?';

  if (!loading && artist) {
    return (
      <div className="ArtistInfoPage">
        <BackCircleIcon className="TrackInfoPage__back-button" onClick={() => history.goBack()} />
        <div className="TrackInfoPage__track-wrapper">
          <ImageWithFallback
            className="ArtistInfoPage__artist-image"
            src={artist.mainImage}
            fallback={<div className="TrackInfoPage__image-fallback">{fallbackLetter}</div>}
            alt="Track Fallback Image"
          />

          <div className="ArtistInfoPage__artist-info">
            <h2 className="ArtistInfoPage__artist-name">{artist.name}</h2>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ArtistInfoPage;
