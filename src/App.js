import React from "react";
import './App.css';
import Gallary from "./components/gallery";

function App() {
  const images = [
    {
      original: "https://github.com/indiraneupane/indira/blob/main/1.jpg",
      thumbnail: "https://github.com/indiraneupane/indira/blob/main/1.jpg",
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
