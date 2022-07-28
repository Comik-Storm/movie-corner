import React, {useEffect, useState} from 'react';
import axios from "axios";

const useFetchData = (url) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const getData = async () => {
            return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bb9a8346fd3ada774573d57bb494b560&language=en-US&page=1')
                .then(response => {
                setData(response.data.results)
                setError(null)
                setLoading(null)
            }).catch(error => {
                if (error.name === 'AbortError') {
                    console.log("Aborted")
                } else {
                    setError(error.message)
                    setLoading(false)
                }
            })
        }
        getData()
    }, [url])

    return { data, loading, error };
}

const Home = () => {

    const {data: movies, loading, error} = useFetchData('https://streamlinewatch-streaming-guide.p.rapidapi.com/movies')
    const posterUrl = '/404.jpeg'

    return (
        <div className="home">
            <h1 className="title">Popular Movies</h1>
            {
                error && <h3>{error}</h3>
            }
            {
                loading && <h2 className="loader">Loading...</h2>
            }
            {
                movies && <div className="row pokemon mt-4">
                    {
                        movies.map((item) => {
                            return (
                                <div className="col-lg-4 mb-4" key={item.id}>
                                    <div className="shadow card card-md">
                                        <img className="img-fluid" src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : posterUrl} alt=""/>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title text-capitalize">
                                                {item.title}
                                            </h5>
                                            <p className="card-text text-start">
                                                {`Rating: ${item.vote_average}/10 (${item.vote_count})`}
                                                <br/>
                                                {`Release Date: ${item.release_date}`}
                                                <br/>
                                                 {item.adult ? <span className="text-danger">Adult Only</span> : <span className="text-primary">All Ages</span>}
                                            </p>
                                            <a className="btn btn-info" href={`/movie/${item.id}`}>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Home;