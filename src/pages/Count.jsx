import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{padding : "200px"}}>
    <br></br>  
    <button style={{ padding: "5px", backgroundColor:"teal" ,color : "navy"}} onClick={handleClick}>
        I liked it!
    </button>
    <p>You pressed me {count} times </p>
    </div>
  );
}
