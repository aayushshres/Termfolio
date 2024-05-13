import "./index.css";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="App">
      <img src="src/assets/scanlines.png" className="noselect" id="scan"></img>
      <img src="src/assets/bezel.png" className="noselect" id="bezel"></img>
      <Terminal></Terminal>
    </div>
  );
}

export default App;
