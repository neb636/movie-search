import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './ArtistCard.css';
import { Store } from '../../common/store';
import { ArtistItem } from '../../../../shared-interfaces/interfaces';

type Props = { artist: ArtistItem; store?: Store; };


class ArtistCard extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { store, artist } = this.props;
        const { mainImage, name, type } = artist;

        return (
            <div className='ArtistCard'>

                <img className='ArtistCard__image'
                     src={mainImage} />

                <h5 className='ArtistCard__name'>{name}</h5>
            </div>
        );
    }
}

export default ArtistCard;
