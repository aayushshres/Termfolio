import "./index.css";
import Terminal from "./components/terminal";

function App() {
  return (
    <div className="App">
      <img
        src="https://i.postimg.cc/tJhBVh4d/scanlines.png"
        className="noselect"
        id="scan"
      ></img>
      <Terminal></Terminal>
    </div>
  );
}

export default App;
