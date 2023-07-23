import { useState } from 'react';

const peoples = [
  {
    name: "tanaka",
    lines: "Hi",
  },
  {
    name: "Hiroshi",
    lines: "Momo",
  },
  {
    name: "gotou",
    lines: "Oni!",
  },

]

export default function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  
  let people = peoples[index];

  return (
    <div>
      <button onClick={handleClick}>
        next
      </button>
      <h1>peoples</h1>
      <h2><i>No: {index + 1} </i> {people.name}</h2>
      <ul>
        <li>{people.lines}</li>
      </ul>
    </div>
  )
}