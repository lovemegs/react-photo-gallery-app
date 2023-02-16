import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";



const PhotoContainer = ({data}) => {
    const results = data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} server={photo.server} id={photo.id} secret={photo.secret} alt={photo.title} />);
    } else {
        photos = <NotFound />
    }

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