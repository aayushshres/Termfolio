import React, { useEffect, useState, useRef } from "react";
import { help } from "../commands";
import { about } from "../commands";

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const prompt = "[termfolio@aayush]$ ";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }
  }, [history]);

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
        case "about":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...about,
          ]);
          break;
        case "clear":
        case "cls":
          setHistory([]);
          break;
        case "exit":
          if (window.confirm("Are you sure you want to exit?")) {
            window.location.href = "about:blank";
          }
          break;
        case "":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
          ]);
          break;
        default:
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            `shell: command not found: ${inputValue}`,
            `shell:  For the list of available commands, type 'help'`,
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
      <div id="title">Termfolio</div>
      <div id="description">
        <p>Welcome to my interactive web terminal.</p>
        <p>
          For the list of available commands, type <b>'help'</b>
        </p>
      </div>
      <div className="textfield" id="text" ref={textRef}>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

        <span>{prompt}</span>
        <div id="inputfield">
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
