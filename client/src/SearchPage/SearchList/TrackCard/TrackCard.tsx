import * as React from 'react';
import './TrackCard.css';
import {TrackItem} from '@state/music/interfaces';
import MovieMonsterApi from '@common/services/movie-monster-api/movie-monster-api';
import AudioButton from '@common/components/AudioButton/AudioButton';

type Props = { track: TrackItem; };

const TrackCard = ({ track }: Props) => {
    const { mainImage, name, albumName, artistName, previewUrl, id } = track;

    const fetchMovieInfo = async () => {
        const res = await MovieMonsterApi.movie.getMovieListBySpotifyTrackId({ spotifyTrackId: id });
        console.log(res);
    };

    return (
        <div className='TrackCard' onClick={fetchMovieInfo}>

            { previewUrl &&
                <AudioButton source={previewUrl} />
            }

            <img className='TrackCard__image' src={mainImage} />

            <h5>{name}</h5>

            <div className='TrackCard__meta-data'>

                <div className='TrackCard__meta-data-title'>Album:</div>
                <div className='TrackCard__meta-data-content'>{albumName}</div>
            </div>
        </div>
    );
};

export default TrackCard;
