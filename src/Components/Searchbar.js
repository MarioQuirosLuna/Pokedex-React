import React from 'react';
const {useState} = React;

const Searchbar = (props) => { 
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (evt) =>{
        setSearch(evt.target.value.toLowerCase());
        if(evt.target.value.length === 0){
            onSearch(null);
        }
    };

    const onClick = async (evt) =>{
        onSearch(search);
    };

    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input placeholder="Search" onChange={onChange}></input>
            </div>
            <div className="search-bar-btn">
                <button className="btn-Search" onClick={onClick}>Search</button>
            </div>
        </div>
        
    );
}

export default Searchbar;