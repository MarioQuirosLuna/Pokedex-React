import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props;

    const prevPage = () => {
        const prevPage = Math.max(page - 1, 0);
        setPage(prevPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination page={page+1} totalPages={total} onLeftClick={prevPage} onRightClick={nextPage}/>
            </div>
            {loading ?
                <div>Loading Pokemons...</div> 
            :
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, id) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name}/>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Pokedex;