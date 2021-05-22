import "./App.css";
import axios from "axios";

function App() {
  const register = () => {
    axios
      .get("http://localhost:3001/register")
      .then((res) => console.log(res.data));
  };
  return (
    <div className="App">
      <button onClick={register}>register</button>
    </div>
  );
}

export default App;
