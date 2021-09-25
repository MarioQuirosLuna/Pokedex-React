import React, {useContext} from 'react';
import FavoriteContext from '../Contexts/favoriteContext'

const Pokemon = (props) => {
    const {pokemon} = props;

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (evt) => {
        evt.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, id) =>{
                            return (
                                <div key={id} className="pokemon-type-text" id={type.type.name}>{type.type.name}</div>
                            );
                        })}
                    </div>
                    <button onClick={clickHeart}>
                        <div className="pokemon-heart-btn">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;