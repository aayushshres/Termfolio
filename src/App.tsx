import "./index.css";
import Terminal from "./components/terminal";

function App() {
  return (
    <div className="App">
      <img src="src/assets/scanlines.png" className="noselect" id="scan"></img>
      <Terminal></Terminal>
    </div>
  );
}

export default App;
