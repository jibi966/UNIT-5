import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const counterValue = 1;
  return (
    <>
      <div className="App">
        <Counter value={counterValue} />
      </div>
    </>
  );
}

export default App;
