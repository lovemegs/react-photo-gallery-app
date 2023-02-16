import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../config";

// Components
import PhotoContainer from "./PhotoContainer";

const Dogs = () => {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("dogs");
    const [loading, setLoading] = useState(true);

    // Fetches 24 photos from flickr that match the query
    useEffect(() => {
        setLoading(true);
        let activeFetch = true;
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
            .then(response => {
                // handle success
                if (activeFetch) {
                    console.log(response);
                    setPhotos(response.data.photos.photo);
                    setLoading(false);
                }
            })
            .catch(error => {
                // handle error
                console.log("Error fetching and parsing data", error);
            });
        return () => { activeFetch = false }
    }, [query]);

    return (
        <div className="photo-container">
            {/* Adds a loading message before the images load */}
            {(loading)?<p>Loading...</p>:<PhotoContainer data={photos} />}
        </div>
    )
}

export default Dogs;