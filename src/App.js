import React from "react";
import { Route, Routes } from "react-router-dom";
import config from "./config";

// App Components
import PhotoContainer from "./Components/PhotoContainer";
import Photos from "./Components/Photos";
import NotFound from "./Components/NotFound";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";


function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer />} />
        <Route path="photos" element={<Photos />} />
        <Route path="notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
