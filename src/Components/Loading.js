import React from 'react';
import starmieLoading from '../img/starmie.png';

const Loading = () => {

    return (
        <div className="container-loading">
            <img className="Loading-logo" src={starmieLoading} alt="Loading..."></img>
        </div>
    );

}

export default Loading;