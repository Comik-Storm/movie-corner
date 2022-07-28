import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchForm = ({setSearch}) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = event => {
        event.preventDefault()
        navigate(`/search/${query}`, {replace: true})
    }

    return (
        <div className="search-form input-group">
            <input className="form-control" type="text" placeholder="Search" value={query}
                   onChange={event => setQuery(event.target.value)}/>
            <button onClick={handleSearch} className="btn btn-sm btn-info"><i className="fa fa-search"></i></button>
            <button onClick={() => setSearch(false)} className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button>
        </div>
    )
}

const Navbar = () => {
    const [search, setSearch] = useState(false)

    return (
        <nav className="navbar border-bottom border-muted mb-4">
            <h2>Movies</h2>
            <div className="links d-flex flex-row justify-content-around">
                <Link to="/" onClick={() => setSearch(false)}>
                    Home
                </Link>
                {
                    !search ?
                        <div onClick={() => setSearch(true)}>
                            <Link to="#">
                                Search
                            </Link>
                        </div>
                        : <SearchForm setSearch={setSearch} />
                }
            </div>
        </nav>
    );
};

export default Navbar;