import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './TrackCard.css';
import { Store } from '../../common/store';
import AudioButton from '../../common/components/AudioButton/AudioButton';
import { TrackItem } from '../../../../shared-interfaces/interfaces';

type Props = { track: TrackItem, store?: Store };


@inject('store')
@observer
class TrackCard extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { store, track } = this.props;
        const { mainImage, name, albumName, artistName, previewUrl } = track;

        return (
            <div className='TrackCard'>

                {previewUrl &&
                    <AudioButton source={previewUrl}></AudioButton>
                }

                <img className='TrackCard__image'
                     src={mainImage} />

                <h5>{name}</h5>


                <div className='TrackCard__meta-data'>

                    <div className='TrackCard__meta-data-title'>Album:</div>
                    <div className='TrackCard__meta-data-content'>{albumName}</div>
                </div>
            </div>
        );
    }
}

export default TrackCard;
