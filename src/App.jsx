import { useState } from "react";
import "./App.css";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const handleInput = () => {};
  return (
    <div className="App">
      <span className="tittle">The react calculator !</span>
      <div className="grid">
        <Keyboard handleInput={handleInput} input={input} output={output} />
      </div>
    </div>
  );
}

export default App;
