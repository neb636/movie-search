import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './ArtistInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import { useArtistInfoPageQuery } from '@pages/ArtistInfoPage/use-artist-info-page-query';

const ArtistInfoPage = () => {
  const { spotifyArtistId } = useParams<{ spotifyArtistId?: string }>();
  const history = useHistory();
  const { artist, albums, loading, error } = useArtistInfoPageQuery(spotifyArtistId || '');
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

        {albums && albums.items && (
          <div className="ArtistInfoPage__albums-section">
            <div className="ArtistInfoPage__albums-section-header">Albums</div>

            <div className="ArtistInfoPage__albums-list-wrapper">
              {albums.items.map(album => (
                <div className="ArtistInfoPage__album" key={album.id}>
                  <ImageWithFallback
                    className="ArtistInfoPage__album-image"
                    src={album.mainImage}
                    fallback={<div className="ArtistInfoPage__artist-image-fallback">?</div>}
                    alt="Track Fallback Image"
                  />

                  <div className="ArtistInfoPage__album-info">
                    <div className="ArtistInfoPage__album-name">{album.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ArtistInfoPage;
