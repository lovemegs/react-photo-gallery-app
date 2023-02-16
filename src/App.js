import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

// App Components
import PhotoContainer from "./Components/PhotoContainer";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Dogs from "./Components/Dogs";
import Rainbows from "./Components/Rainbows";
import Flowers from "./Components/Flowers";


const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("zoo animals");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    let activeFetch = true;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        if (activeFetch) {
          console.log(response);
          setPhotos(response.data.photos.photo);
          // setLoading(false);
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

      <SearchForm changeQuery={handleQueryChange} />
      <Nav />

      <Routes>
        <Route path="/" element={<PhotoContainer data={photos}/>} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/rainbows" element={<Rainbows />} />
      </Routes>
    </div>
  );
}

export default App;