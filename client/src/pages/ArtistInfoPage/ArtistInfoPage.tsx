import React from 'react';
import { useParams } from 'react-router-dom';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './ArtistInfoPage.css';
import { useArtistInfoPageQuery } from '@pages/ArtistInfoPage/use-artist-info-page-query';
import InfoPageWrapper from '@common/components/InfoPageWrapper/InfoPageWrapper';
import { filterSoundtrackAlbums, parseName } from '@common/utils/sountrack-filter-util';

const ArtistInfoPage = () => {
  const { spotifyArtistId } = useParams<{ spotifyArtistId?: string }>();
  const { artist, albums, loading, error } = useArtistInfoPageQuery(spotifyArtistId || '');
  const soundtrackAlbums = filterSoundtrackAlbums(albums || []);

  if (!loading && artist) {
    return (
      <InfoPageWrapper
        title={artist.name}
        heroImageSrc={artist.mainImage}
        topRightSection={
          <div>
            <div>{artist?.genres}</div>
          </div>
        }
      >
        <div>
          {!!soundtrackAlbums.length && (
            <div className="ArtistInfoPage__albums-section">
              <div className="ArtistInfoPage__albums-section-header">Movie Soundtracks</div>

              <div className="ArtistInfoPage__albums-list-wrapper">
                {soundtrackAlbums.map(album => (
                  <div className="ArtistInfoPage__album" key={album.id}>
                    <ImageWithFallback
                      className="ArtistInfoPage__album-image"
                      src={album.mainImage}
                      fallbackText={album.name}
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
      </InfoPageWrapper>
    );
  }

  return null;
};

export default ArtistInfoPage;
