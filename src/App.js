import React, { useState } from "react";
import './App.css';
import IndiraGallary from "./components/gallery/didi";
import BubaGallary from "./components/gallery/buba";

function App() {
  const [inputValue, setInputValue] = useState(''); // Initialize input value state
  const [message, setMessage] = useState('');
  const word = inputValue.toLowerCase();
  const MemoIndiraGallary = React.memo(IndiraGallary)
  const MemoBubaGallary = React.memo(BubaGallary)
  const checkWord = () => {
  if (word === 'ghanashyam') {
    setMessage('स्वागत छ,घनश्याम न्यौपाने !');

  } else if( word === 'indira') {
    setMessage('स्वागत छ, इन्दिरा!');
  }
}
  return (
    <div className="container">
          <div className="centered">
      <input
        type="text"
        placeholder="एक गोप्य शब्द प्रवेश गर्नुहोस्।"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={()=>checkWord()}>click</button>
      <p>{message&&message}</p>
    </div>
    {(word === 'indira')&&<MemoIndiraGallary />}
    {word === 'ghanashyam'&&<MemoBubaGallary />}
    </div>
  );
}

export default App;
