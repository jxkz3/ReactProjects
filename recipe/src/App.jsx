import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main darkMode={false} />
    </div>
  );
}

export default App;
