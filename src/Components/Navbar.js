import React,{useContext} from 'react';
import FavoriteContext from '../Contexts/favoriteContext'

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);

    let logoURL = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
        <nav>
            <div>
                <img src={logoURL} alt="pokeapi-logo" className="navbar-image"/> 
            </div>
            <div className="navbar-heart-img">❤️ {favoritePokemons.length}</div>
        </nav>
    );
}

export default Navbar;