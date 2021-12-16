import React from 'react';
import './style/styles.css';
import './style/media.css';
import './style/colors.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Pokedex from './Components/Pokedex';
import NotFound from './Components/NotFound';
import FootPage from './Components/FootPage';
import { searchPokemon, getPokemons, getPokemonData } from './api';
import { FavoriteProvider } from './Contexts/favoriteContext';
import ReactGA from 'react-ga'

const {useState, useEffect} = React;

const localStorageKey = "favorite_pokemon";

ReactGA.initialize('G-W6HGFVMD54',{ standardImplementation: true})

export default function App() {
	const [pokemons, setPokemons] = useState([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [favorites, setFavorites] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [searching, setSearching] = useState(false);

	const fetchPokemons = async () => {
		try {
			setLoading(true);
			const data = await getPokemons(25, 25 * page);
			const promises = data.results.map(async (pokemon) => {
				return await getPokemonData(pokemon.url)
			})
			const results = await Promise.all(promises);
			setPokemons(results);
			setLoading(false);
			setTotal(Math.ceil(data.count / 25));
			setNotFound(false);
		}catch (err) {}
	};

	const loadFavoritePokemons = () => {
		const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
		setFavorites(pokemons);
	};

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search)
	}, [])

	useEffect(() => {
		loadFavoritePokemons();
	},[]);

	useEffect(() => {
		if(!searching){
			fetchPokemons();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const updateFavoritePokemon = (name) => {
		const update = [...favorites];
		const isFavorite = favorites.indexOf(name);
		if(isFavorite >= 0){
			update.splice(isFavorite, 1);
		}else{
			update.push(name);
		}
		setFavorites(update);
		window.localStorage.setItem(localStorageKey, JSON.stringify(update));
	};	

	const onSearch = async (pokemon) => {
		if(!pokemon){
			return fetchPokemons();
		}
		setLoading(true);
		setNotFound(false);
		setSearching(true);
		const result = await searchPokemon(pokemon);
		if(!result){
			setNotFound(true);
			setLoading(false);
			setSearching(false);
			return;
		}else{
			setPokemons([result]);
			setPage(0);
			setTotal(1);
		}
		setLoading(false);
		setSearching(false);
	};

	return (
		<FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemon}}>
			<div className="container">
				<Navbar />
				<div className="App">
					<Searchbar onSearch={onSearch}/>
					{notFound ? 
						<NotFound />						
					:
						<Pokedex loading={loading} pokemons={pokemons} page={page} setPage={setPage} total={total}/>
					}				
				</div>
				<FootPage />
			</div>
		</FavoriteProvider>
	);
}

