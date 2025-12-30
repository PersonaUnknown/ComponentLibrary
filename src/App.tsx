import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import TypewriterDemo from "./pages/TypewriterDemo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/typewriter" element={<TypewriterDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
