import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Book Review</h1>
      <h2>For test</h2>
      <p>{count}</p>
      <button
      onClick={()=> setCount(count+1)}
       type="button" 
       className="btn"
       >Counter</button>
    </>
  )
}

export default App
