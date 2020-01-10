import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMusicActions } from '@state/music/actions';
import { useSelector } from 'react-redux';
import { StoreState } from '@state/store-interfaces';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './ArtistInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import MovieMonsterApi from '@common/services/movie-monster-api/movie-monster-api';
import { useSafeState } from '@common/hooks/use-safe-state';

const usePrimeState = () => {
  const [albums, setAlbums] = useSafeState([]);
  const { spotifyArtistId } = useParams<{ spotifyArtistId?: string }>();
  const musicActions = useMusicActions();

  useEffect(() => {
    const fetchAlbums = async (spotifyArtistId: string) => {
      const response = await MovieMonsterApi.music.getAlbumsByArtist({ spotifyArtistId });
      console.log(response);
      setAlbums(response);
    };
    if (spotifyArtistId) {
      musicActions.fetchSelectedArtist(spotifyArtistId);
      fetchAlbums(spotifyArtistId);
    }
  }, []);

  return { albums };
};

const ArtistInfoPage = () => {
  usePrimeState();
  const history = useHistory();
  const artist = useSelector((state: StoreState) => state.music.selectedArtist);
  const fallbackLetter = artist?.name?.charAt(0) || '?';

  if (artist) {
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
