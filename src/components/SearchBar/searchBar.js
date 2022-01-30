import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { fetchPost } from "../../store/postSlice";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log(search);
        dispatch(fetchPost( search.length > 0 ? search : 'Home'));
    }, [search, dispatch])
    
    const handleSearch = (e) => {
        setSearch(e.target.value)

    }

    const handleSearchOnSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchPost(search));
    }

    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <img src="./reddit-logo.png" alt="logo" />
                    <h1>Reddit</h1>
                </div>             
                <form className="searchBar"  onSubmit={handleSearch}>
                    <input  type='text' 
                            placeholder='Search'  
                            onChange={handleSearch} 
                            />
                    <button type="submit" onClick={handleSearchOnSubmit}>
                        <FaSearch className="search-action" />
                    </button>
                </form>
        
            </div>
        </header>
    )
} 

export default SearchBar;