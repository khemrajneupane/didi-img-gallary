import React from "react";
import ImageGallery from "react-image-gallery";

const BubaGallary=()=> {
const bubaImages = [];
for (let i = 1; i <= 53; i++) {
  const image = {
    original: `/assets/buba/buba${i}.jpg`,
    thumbnail: `/assets/buba/buba${i}.jpg`,
  };
  bubaImages.push(image);
}
  return (
    <div>
    <ImageGallery items={bubaImages}/>
    </div>
  );
}

export default BubaGallary;
