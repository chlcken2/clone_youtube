import { useEffect, useState } from "react";

function Test() {
  const [names, setNames] = useState(["el"]);
  const [ages, setAges] = useState(20);
  useEffect(() => {
    console.log(ages);
  }, [ages]);

  const increment = () => {
    setAges(ages + 1);
  };
  return (
    <div>
      <h1>hello</h1> <button onClick={increment}>age +1 Click</button>
    </div>
  );
}

export default Test;
