import * as React from 'react';
import './ArtistCard.css';
import {ArtistItem} from "../../state/music/interfaces";

type Props = { artist: ArtistItem; };


const ArtistCard = ({ artist }: Props) => {
    const { mainImage, name, type } = artist;

    return (
        <div className='ArtistCard'>

            <img className='ArtistCard__image' src={mainImage} />

            <h5 className='ArtistCard__name'>{name}</h5>
        </div>
    );
};

export default ArtistCard;
