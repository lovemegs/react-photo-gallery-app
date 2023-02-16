import React from "react";
import Photo from "./Photo";
// Components
import NotFound from "./NotFound";

// Maps over the array of photos from flickr
const PhotoContainer = ({data}) => {
    const results = data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} server={photo.server} id={photo.id} secret={photo.secret} alt={photo.title} />);
    } else {
        photos = <NotFound />
    }

    // Returns the list of photos
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    ); 
}

export default PhotoContainer;