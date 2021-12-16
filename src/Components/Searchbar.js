import React from 'react';

import useGAEventsTracker from '../useGAEventsTracker';
const {useState} = React;

const Searchbar = (props) => { 
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const GAEventsSearch = useGAEventsTracker("Search")

    const onChange = (evt) =>{
        setSearch(evt.target.value.toLowerCase());
        if(evt.target.value.length === 0){
            onSearch(null);
        }
    };

    const onClick = async (evt) =>{
        GAEventsSearch("Search Click")
        onSearch(search);
    };

    const onKeyPress = async (evt) =>{
        GAEventsSearch("Search Press")
        if(evt.key === 'Enter'){
            onSearch(search);
        }
    };

    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input placeholder="Search" onChange={onChange} onKeyPress={onKeyPress}></input>
            </div>
            <div className="search-bar-btn">
                <button className="btn-Search" onClick={onClick}>Search</button>
            </div>
        </div>
        
    );
}

export default Searchbar;