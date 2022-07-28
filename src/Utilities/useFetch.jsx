import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseFetch = url => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()



    useEffect(() => {
        const getData = async () => {
            return await axios.get(url).then(response => {
                response.data.results ? setData(response.data.results) : setData(response.data)
                setError(null)
                setLoading(false)
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
};

export default UseFetch;