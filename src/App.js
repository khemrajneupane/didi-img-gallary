import React from "react";
import ImageGallery from "react-image-gallery";
import './App.css';
import Gallary from "./components/gallery";

function App() {
  const images = [
    {
      original: "/logo192.png",
      thumbnail: "/logo192.png",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
    <Gallary items={images}/>
    </div>
  );
}

export default App;
