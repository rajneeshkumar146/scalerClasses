import { useState, useMemo } from "react"
import React from 'react'

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 100000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
}

const sumArray = (arr) => {
  console.log('Calculating sum...');
  return arr.reduce((acc, curr) => acc + curr, 0);
};

function LargeArraySum() {
  const [count, setCount] = useState(0);
  // const largeArray = generateLargeArray();
  // const sum = sumArray(largeArray);


  // By using useMemo, the costly sumArray function is not re-executed on every render 
  // unless the dependency (largeArray) changes. This prevents unnecessary recalculations 
  // and significantly improves performance.
  const largeArray = useMemo(() => generateLargeArray(), []);
  const sum = useMemo(() => sumArray(largeArray), [largeArray]);


  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default LargeArraySum