import { useState } from 'react';
import Counter from './components/counter';

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
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  
  let people = peoples[index];

  return (
    <div>
      <button onClick={handleClick}>
        next
      </button>
      <Counter />
      <h1>peoples</h1>
      <h2><i>No: {index + 1} </i> {people.name}</h2>
      <ul>
        <li>{people.lines}</li>
      </ul>
      <button onClick={handleMoreClick}>
        {showMore ? people.name : 'showmore?'} details
      </button>
      {showMore && <div>
        <p>{people.name}</p>
        <p>{people.lines}</p>
        </div>
      }
    </div>
  )
}
