import React from "react";
import { fetchSearch, selectSearch  } from "../../store/SearchSlice";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {

    const dispatch = useDispatch();
   

    const HandleSearch = (e) => {

    }


    return (
        <header>
            <div className="MainBar">
                <div className="logo">
                    <img src="./reddit-logo.png" alt="logo" />
                    <h1>Reddit</h1>
                </div>
                <div className="SearchBar">
                    <input  type='text' placeholder='Search'  onChange={HandleSearch} />
                    
                    <FaSearch className="search-action" />
                </div>
            </div>
        </header>
    )
} 

export default SearchBar;