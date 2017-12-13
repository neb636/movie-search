#if($NAME.indexOf(".") > 0)
    #set($NAME = $NAME.substring(0,$NAME.indexOf(".")))
#end
import * as React from 'react';
import './${NAME}.css';


function $NAME() {
    return <div className='$NAME'></div>;
};


export default $NAME;
