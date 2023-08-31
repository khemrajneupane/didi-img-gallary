import React from "react";
import ImageGallery from "react-image-gallery";

const Gallary=({items})=> {
  return (
    <div className="App">
   <h1>My gallary</h1>
    <ImageGallery items={items}/>
    </div>
  );
}

export default Gallary;
