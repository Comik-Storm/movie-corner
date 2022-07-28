import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import useFetch from "../Utilities/useFetch";

const Filter = () => {
    const {query} = useParams()
    const navigate = useNavigate()
    const {
        data: movies,
        loading,
        error
    } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=bb9a8346fd3ada774573d57bb494b560&language=en-US&query=${query}&page=1`)
    const posterUrl = '/404.jpeg'

    return (
        <div className="search">
            <h1 className="title">Search Results for: {`'${query}'`}</h1>
            {
                error && <h3>{error}</h3>
            }
            {
                loading && <h2 className="loader">Loading...</h2>
            }
            {
                movies && movies.length !== 0 ? <div className="row pokemon mt-4">
                    {
                        movies.map((item) => {
                            return (
                                <div className="col-lg-4 mb-4" key={item.id}>
                                    <div className="shadow card card-md">
                                        <img className="img-fluid"
                                             src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : posterUrl}
                                             alt=""/>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title text-capitalize">
                                                {item.title}
                                            </h5>
                                            <p className="card-text text-start">
                                                {`Rating: ${item.vote_average}/10 (${item.vote_count})`}
                                                <br/>
                                                {`Release Date: ${item.release_date}`}
                                                <br/>
                                                {item.adult ? <span className="text-danger">Adult Only</span> :
                                                    <span className="text-primary">All Ages</span>}
                                            </p>
                                            <a className="btn btn-info" href={`/movie/${item.id}`}>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : <div className="error">
                    <h3 className="text-warning">Sorry, we could not find any movie</h3>
                    <Link to="/" className="btn btn-info">
                        Go Back Home
                    </Link>
                </div>
            }
        </div>
    );
};

export default Filter;