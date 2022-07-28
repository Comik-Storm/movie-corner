import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../Utilities/useFetch";

const Movie = ({movie}) => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="movie">
            <div className="row text-start mb-2">
                <div className="col-md-11">
                    <h2 className="text-success">{movie.title}</h2>
                </div>
                <div className="col-md-1">
                    <button onClick={handleBack} className="mx-auto btn btn-outline-secondary"><i
                        className="fa fa-angle-left"></i>
                    </button>
                </div>
            </div>
            <div className="row text-start">
                <div className="col-md-4">
                    <div className="genre mb-2">
                        <div className="d-flex flex-row flex-wrap">
                            {
                                movie['genres'].map(item => {
                                    return (
                                        <span key={item.id} className="text-light badge bg-dark m-1">{item.name}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <p className="text-muted"><span className="text-primary">Release Status: </span>{movie.status}</p>
                    <p className="text-muted"><span className="text-primary">Release Date:</span> {movie.release_date}
                    </p>
                    <p className="text-muted"><span
                        className="text-primary">Total Runtime: </span>{`${movie.runtime} Hrs`}</p>
                    <p className="text-muted"><span
                        className="text-primary">User Rating: </span>{`${movie.vote_average}/10 (${movie.vote_count})`}
                    </p>
                </div>
                <div className="col-md-8 text-start border-start border-info">
                    <h3>Overview</h3>
                    {movie.overview}
                    <h3 className="mt-2">Gallery</h3>
                    <div className="gallery">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Movie Poster"
                             className="img-fluid w-50 h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MovieDetails = () => {
    const {id} = useParams()
    const {
        data: movie,
        loading,
        error
    } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bb9a8346fd3ada774573d57bb494b560&language=en-US`)
    return (
        <div className="details">
            {
                error && <h2>{error}</h2>
            }
            {
                loading && <h2>Loading...</h2>
            }
            {
                movie && <Movie movie={movie}/>
            }
        </div>
    );
};

export default MovieDetails;