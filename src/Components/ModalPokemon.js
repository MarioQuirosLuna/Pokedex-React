import React from 'react';

const ModalPokemon = (props) => {
    const {pokemon} = props;

    return (
        <div className="card-Details">
            <div className="card-info">
                <h4>Height:</h4>
                <p>{pokemon.height}</p>
            </div>
            <div className="card-info">
                <h4>Weight:</h4>
                <p>{pokemon.weight}</p>
            </div>
            <div className="card-info">
                <h4>Abilities:</h4>
                <div className="card-info-abilities">                   
                    {pokemon.abilities.map((ability, index) => {
                        return (
                            <p key={index} className="card-info-ability">{ability.ability.name}</p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ModalPokemon;