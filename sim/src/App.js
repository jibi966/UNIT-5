import { useEffect } from "react";
import "./App.css";
import { Button, Wrapper } from "./components/Button";

function App() {
  useEffect(() => {
    console.log("landing");
  }, []);
  return (
    <div className="App">
      <Wrapper>
        <Button onClick={() => console.log("styled Button")}>Add</Button>
      </Wrapper>
    </div>
  );
}

export default App;
