import React from 'react';
import github_icon from "../img/github.png";
import twitter_icon from "../img/twitter.png";
import linkedin_icon from "../img/linkedin.png";

const FootPage = () => {

    return (
        <div className="container-footer">
            <div className="footer">               
                <div className="social-networks">
                    <div className="social-icon">
                        <a href="https://github.com/MarioQuirosLuna?tab=repositories" title="Mario" target="_blank" rel="noopener noreferrer"><img className="icon" src={github_icon} alt="github-Mario"/></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/mario-quir%C3%B3s-luna-b99050206" title="Mario" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedin_icon} alt="linkedin-Mario"/></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://twitter.com/home" title="Mario" target="_blank" rel="noopener noreferrer"><img className="icon" src={twitter_icon} alt="twitter-Mario"/></a>
                    </div>
                </div>   
                <div className="creator">
                    <div>
                        <h3>Site created by ©Mario Quir&oacute;s Luna.</h3>
                    </div>                                 
                </div>
                <div className="social-images">
                    <div className="social-image-creator">
                        <h5>Images by <a href="https://github.com/IsaPortuguez?tab=repositories" target="_blank" rel="noopener noreferrer">Isabel Portuguez Calder&oacute;n</a></h5>
                    </div>
                    <div className="social-image-creator">
                        Icons by <a href="https://www.flaticon.es/autores/riajulislam" title="riajulislam" target="_blank" rel="noopener noreferrer">riajulislam</a> from <a href="https://www.flaticon.es/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.es</a>
                    </div>    
                    <div className="social-image-creator">
                        <h5>Using the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> and <a href="https://create-react-app.dev/" target="_blank" rel="noopener noreferrer">Create-React-App</a></h5>
                    </div>       
                </div>
            </div>
        </div>
    );
}

export default FootPage;