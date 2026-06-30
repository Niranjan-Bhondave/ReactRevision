/*
import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCounter,setChangeCounter] = useState(0);

  const onButtonClick = (color) => () => {
    if(backgroundColor != color)
      setChangeCounter(changeCounter+1);
    setBackgroundColor(color)
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <br />
      <h3>Times background color has changed:{changeCounter}</h3>
    </div>
  );
}

export default App;
*/