import React, { useEffect, useState, useRef } from "react";

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const prompt = "[termfolio@aayush]$ ";

  const help = [
    "clear - Clear the screen",
    "help - Show this help menu",
    "... (add more commands here)",
  ];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = inputValue.trim().toLowerCase();

      switch (command) {
        case "help":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...help,
          ]);
          break;
        case "clear":
          setHistory([]);
          break;
        default:
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            `shell: command not found: ${inputValue}`,
            `shell: enter 'help' to list valid commands`,
          ]);
          break;
      }

      setInputValue("");
    }
  };

  return (
    <div
      className="Terminal"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <div id="text">
        <div id="title">Termfolio</div>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

        <div>
          <span id="text">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default Terminal;
