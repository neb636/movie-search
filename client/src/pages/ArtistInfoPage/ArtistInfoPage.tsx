import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './ArtistInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import { useArtistInfoPageQuery } from '@pages/ArtistInfoPage/use-artist-info-page-query';
import { AlbumItem } from '@common/mappers/album-mapper';

const SOUNDTRACK_FILTERS = ['Motion Picture', 'Original Music', 'Soundtrack', 'Music from', ' '];

const filterAlbums = (albums: AlbumItem[]) => {
  return albums.filter(album => {
    return SOUNDTRACK_FILTERS.map(filter => album.name.includes(filter)).some(result => result);
  });
};

const parseName = (name: string) => {
  const indexOfFirst = name.search(/[-(\[]/);

  if (indexOfFirst) {
    return name.substring(0, indexOfFirst);
  }

  return '?';
};

const ArtistInfoPage = () => {
  const { spotifyArtistId } = useParams<{ spotifyArtistId?: string }>();
  const history = useHistory();
  const { artist, albums, loading, error } = useArtistInfoPageQuery(spotifyArtistId || '');
  const fallbackLetter = artist?.name?.charAt(0) || '?';
  const soundtrackAlbums = filterAlbums(albums || []);

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

        {!!soundtrackAlbums.length && (
          <div className="ArtistInfoPage__albums-section">
            <div className="ArtistInfoPage__albums-section-header">Movie Soundtracks</div>

            <div className="ArtistInfoPage__albums-list-wrapper">
              {soundtrackAlbums.map(album => (
                <div className="ArtistInfoPage__album" key={album.id}>
                  <ImageWithFallback
                    className="ArtistInfoPage__album-image"
                    src={album.mainImage}
                    fallback={<div className="ArtistInfoPage__artist-image-fallback">?</div>}
                    alt="Track Fallback Image"
                  />

                  <div className="ArtistInfoPage__album-info">
                    <div className="ArtistInfoPage__album-name">{parseName(album.name)}</div>
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
