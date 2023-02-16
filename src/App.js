import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

// App Components
import PhotoContainer from "./Components/PhotoContainer";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Dogs from "./Components/Dogs";
import Rainbows from "./Components/Rainbows";
import Flowers from "./Components/Flowers";


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("zoo animals");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  // Handles the change of the query when a user uses the search feature
  const handleQueryChange = searchText => {
    setQuery(searchText);
    navigate(`/search/${searchText}`);
  }

  // All the routes to each page
  return (
    <div className="container">

      <SearchForm changeQuery={handleQueryChange} />
      <Nav />

      <Routes>
        {/* Adds a loading message before the images load */}
        <Route path="/" element={(loading)?<p>Loading...</p>:<PhotoContainer data={photos} />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/rainbows" element={<Rainbows />} />
        <Route path="/search/:searchText" element={<PhotoContainer data={photos} />} />
      </Routes>
    </div>
  );
}

export default App;