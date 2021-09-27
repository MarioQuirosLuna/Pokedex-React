import React, {useContext,useState} from 'react';
import FavoriteContext from '../Contexts/favoriteContext';
import ModalPokemon from './ModalPokemon';

const Pokemon = (props) => {
    const {pokemon} = props;
    const [show, setShow] = useState(false);

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (evt) => {
        evt.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

    const showDetails = () => {
        if(!show){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    return (
        <div className="pokemon-card" id={pokemon.types[0].type.name}>
            <div className="pokemon-img-container">
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} onClick={showDetails}/>
            </div>
            {show ?
                <ModalPokemon pokemon={pokemon}/>
            :
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
                        <button onClick={clickHeart} className="pokemon-heart-btn">
                            <div>{heart}</div>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Pokemon;
