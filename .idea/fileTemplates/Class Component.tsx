#if($NAME.indexOf(".") > 0)
    #set($NAME = $NAME.substring(0,$NAME.indexOf(".")))
#end
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './${NAME}.css';
import { Store } from '../../common/store';

type Props = { store?: Store };


@inject('store')
@observer
class $NAME extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { store } = this.props;

        return (
            <div className='$NAME'>
            </div>
        );
    }
}

export default $NAME;
