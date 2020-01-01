import * as React from 'react';
import './TrackCard.css';
import AudioButton from '../../common/components/AudioButton/AudioButton';
import {TrackItem} from "../../common/interfaces/interfaces";
import axios from "axios";
import {BACKEND_URL} from "../../common/constants";

type Props = { track: TrackItem; };

const TrackCard = ({ track }: Props) => {
    const { mainImage, name, albumName, artistName, previewUrl, id } = track;

    const getTrack = async () => {
        const { data } = await axios.get(`${BACKEND_URL}/v1/search/movie-recommendations/${id}`);

        console.log(data);
    };

    return (
        <div className='TrackCard' onClick={getTrack}>

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
