import * as React from 'react';
import './TrackCard.css';
import AudioButton from '../../common/components/AudioButton/AudioButton';
import {TrackItem} from "../../common/interfaces/interfaces";

type Props = { track: TrackItem; };

const TrackCard = ({ track }: Props) => {
    const { mainImage, name, albumName, artistName, previewUrl } = track;

    return (
        <div className='TrackCard'>

            {previewUrl &&
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
