import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

// App Components
import PhotoContainer from "./Components/PhotoContainer";
import Photo from "./Components/Photo";
import NotFound from "./Components/NotFound";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";


const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let activeFetch = true;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}`)
      .then(response => {
        // handle success
        if (activeFetch) {
          setPhotos(response.data.data);
        } 
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      });
      return () => {activeFetch = false}
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div className="container">
      <h1>Hello</h1>

      <SearchForm changeQuery={handleQueryChange} />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer />} />
        <Route path="photos" element={<Photo data={photos} />} />
        <Route path="notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
