import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Search = ({}) => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const SearchHandler = (e) => {
        e.preventDefault();

        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }else{
            navigate('/search')
        }

     
    }

    return (
        <form onSubmit={SearchHandler}>
            <div className="input-group w-25">
                <input
                    type="text"
                    id="search_field"
                    placeholder="Buscar"
                    className="form-control"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="input-group-append">
                    <button id="seatchbtn" className="btn btn-warning">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>

            </div>

        </form>
    )
}

export default Search