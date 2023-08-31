import React from "react";
import './App.css';
import Gallary from "./components/gallery";

function App() {
  const images = [
    {
      original: "/assets/1.jpg",
      thumbnail: "/assets/1.jpg",
    },
    {
      original: "/assets/2.jpg",
      thumbnail: "/assets/2.jpg",
    },
    {
      original: "/assets/5.jpg",
      thumbnail: "/assets/5.jpg",
    },
    {
      original: "/assets/6.jpg",
      thumbnail: "/assets/6.jpg",
    },
    {
      original: "/assets/7.jpg",
      thumbnail: "/assets/7.jpg",
    },
    {
      original: "/assets/8.jpg",
      thumbnail: "/assets/8.jpg",
    },
    {
      original: "/assets/10.jpg",
      thumbnail: "/assets/10.jpg",
    },
    {
      original: "/assets/12.jpg",
      thumbnail: "/assets/12.jpg",
    },
    {
      original: "/assets/15.jpg",
      thumbnail: "/assets/15.jpg",
    },
  ];
  return (
    <div>
    <Gallary items={images}/>
    </div>
  );
}

export default App;
