import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ExplosiveTextDemo from "./pages/ExplosiveTextDemo";
import TextAlongPathDemo from "./pages/TextAlongPathDemo";
import TextRandomizerDemo from "./pages/TextRandomizerDemo";
import TypewriterDemo from "./pages/TypewriterDemo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/typewriter" element={<TypewriterDemo />} />
        <Route path="/text-random" element={<TextRandomizerDemo />} />
        <Route path="/text-explode" element={<ExplosiveTextDemo />} />
        <Route path="/text-path" element={<TextAlongPathDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
