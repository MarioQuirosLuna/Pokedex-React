import React from 'react';
import pikachu from '../img/pikachuSad.png';

const NotFoundPage = () => {

    return (
        <div className="container-not-found-page">
            <div className="not-found-text">
                <h2>¡Ooops!</h2>
                <h5>Pokemon not found</h5>
            </div>
            <div className="not-found-img">
                <img className="pikachu-404" src={pikachu} alt="Not Found"></img>
            </div>
        </div>
    );

}

export default NotFoundPage;