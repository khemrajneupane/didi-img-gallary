import React from "react";
import ImageGallery from "react-image-gallery";

const IndiraGallary=()=> {
  const didiImages = [];
for (let i = 1; i <= 53; i++) {
  const images = {
    original: `/assets/didi/${i}.jpg`,
    thumbnail: `/assets/didi/${i}.jpg`,
  };
  didiImages.push(images);
}
  return (
    <div>
    <ImageGallery items={didiImages}/>
    </div>
  );
}

export default IndiraGallary;
