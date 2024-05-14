import React, { useEffect, useState, useRef } from "react";
import {
  help,
  aboutme,
  projects,
  github,
  surprise,
  surpriseLink,
  githubProfile,
  invalid,
} from "../utils/constants";

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
        case "aboutme":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...aboutme,
          ]);
          break;
        case "projects":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...projects,
          ]);
          break;
        case "github":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...github,
          ]);
          setTimeout(() => {
            window.open(githubProfile, "_blank");
          }, 1000);
          break;
        case "surprise":
          setHistory((prevHistory) => [
            ...prevHistory,
            `${prompt} ${inputValue}`,
            ...surprise,
          ]);
          setTimeout(() => {
            window.open(surpriseLink, "_blank");
          }, 500);
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
            ...invalid,
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
        Welcome to my interactive web terminal.
        <br />
        For the list of available commands, type <b>'help'</b>
      </div>
      <p></p>
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
