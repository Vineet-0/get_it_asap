import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";

function App() {
  return (
      <Navigation />
  );
}

export default App;
