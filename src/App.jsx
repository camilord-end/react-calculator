import "./components/styles/App.css";
import { useState, useEffect } from "react";
import { Display } from "./components/calculator/Display.jsx";
import { Keyboard } from "./components/calculator/Keyboard.jsx";
import operators from "./components/dat/operators.js";
import numbers from "./components/dat/numbers.js";

const App = () => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [calculate, setCalculate] = useState("");

  const handleSubmit = () => {
    const total = eval(calculate);
    setInput(total);
    setOutput(`${total} = ${total}`);
    setCalculate(`${total}`);
  };

  const handleClear = () => {
    setInput("0");
    setCalculate("");
  };

  const handleNumbers = (value) => {
    if (!calculate.length) {
      setInput(`${value}`);
      setCalculate(`${value}`);
    } else {
      if (value === 0 && (calculate === "0" || input === "0")) {
        setCalculate(`${calculate}`);
      } else {
        const lastInput = calculate.charAt(calculate.length - 1);
        const isLastInputOperator =
          lastInput === "*" || operators.includes(lastInput);

        setInput(isLastInputOperator ? `${value}` : `${input}${value}`);
        setCalculate(`${calculate}${value}`);
      }
    }
  };

  const dotOperator = () => {
    const lastInput = calculate.charAt(calculate.length - 1);
    if (!calculate.length) {
      setInput("0.");
      setCalculate("0.");
    } else {
      if (lastInput === "*" || operators.includes(lastInput)) {
        setInput("0.");
        setCalculate(`${calculate} 0.`);
      } else {
        setInput(
          lastInput === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const formattedValue =
          lastInput === "." || input.includes(".")
            ? `${calculate}`
            : `${calculate}.`;
        setCalculate(formattedValue);
      }
    }
  };

  const handleOperators = (value) => {
    if (calculate.length) {
      setInput(`${value}`);
      const beforeLastInput = calculate.charAt(calculate.length - 2);

      const beforeLastInputIsOperator =
        operators.includes(beforeLastInput) || beforeLastInput === "*";

      const lastInput = calculate.charAt(calculate.length - 1);

      const lastChatIsOperator =
        operators.includes(lastInput) || lastInput === "*";

      const validOp = value === "x" ? "*" : value;
      if (
        (lastChatIsOperator && value !== "-") ||
        (beforeLastInputIsOperator && lastChatIsOperator)
      ) {
        if (beforeLastInputIsOperator) {
          const updatedValue = `${calculate.substring(
            0,
            calculate.length - 2
          )}${value}`;
          setCalculate(updatedValue);
        } else {
          setCalculate(
            `${calculate.substring(0, calculate.length - 1)}${validOp}`
          );
        }
      } else {
        setCalculate(`${calculate}${validOp}`);
      }
    }
  };

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        dotOperator(value);
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };

  const handleOutput = () => {
    setOutput(calculate);
  };

  useEffect(() => {
    handleOutput();
  }, [calculate]);

  return (
    <div className="container">
      <h1 className="header">The react calculator !</h1>
      <div className="calculator">
        <Display input={input} output={output} />
        <Keyboard handleInput={handleInput} />
      </div>
    </div>
  );
};

export default App;
