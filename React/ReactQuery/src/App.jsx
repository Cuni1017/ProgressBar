import { useState } from "react";
import "./App.css";
import WithoutReactQuery from "./view/components/WithoutReactQuery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WithoutReactQuery />
    </div>
  );
}

export default App;
