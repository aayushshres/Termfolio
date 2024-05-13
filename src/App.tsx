import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="App"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let newOutput = "";
            newOutput = output + "\n" + "$" + input + "\n";
            switch (input) {
              case "ls":
                newOutput += "List of projects";
                break;
              case "pwd":
                newOutput += "termfolio";
                break;
              default:
                newOutput += "Invalid Input";
                break;
            }
            setOutput(newOutput);
            setInput("");
          }
        }}
      ></input>
      <div className="terminal">{output}</div>
    </div>
  );
}

export default App;
