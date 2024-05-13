import { useEffect, useState, useRef } from "react";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div
      className="Terminal"
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
              case "help":
                newOutput += "This is help";
                break;
              default:
                newOutput += "Command not found";
                break;
            }
            setOutput(newOutput);
            setInput("");
          }
        }}
      ></input>
      <div className="Output">{output}</div>
    </div>
  );
}
export default Terminal;
