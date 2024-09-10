import "./App.css";
import Search from "./Components/Search";

function App() {
  return (
    <div className="root">
      <p className="text">Welcome to Darth Vader DB</p>
      <h1 className="title typing-demo center">Search your Star Wars enemy, and enter →</h1>
      <p className="text">Happy hunting, and may the force be with you. With ♥, Darth.</p>
      <Search />
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>
  );
}

export default App;
