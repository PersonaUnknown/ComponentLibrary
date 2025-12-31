import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import BouncyTextDemo from "./pages/BouncyTextDemo";
import ExplosiveTextDemo from "./pages/ExplosiveTextDemo";
import HomePage from './pages/HomePage';
import TextAlongPathDemo from "./pages/TextAlongPathDemo";
import TextRandomizerDemo from "./pages/TextRandomizerDemo";
import TypewriterDemo from "./pages/TypewriterDemo";
import InteractiveHoverDemo from "./pages/input/InteractiveHoverDemo";
import RippleButtonDemo from "./pages/input/RippleButtonDemo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Text Effects */}
        <Route path="/typewriter" element={<TypewriterDemo />} />
        <Route path="/text-random" element={<TextRandomizerDemo />} />
        <Route path="/text-explode" element={<ExplosiveTextDemo />} />
        <Route path="/text-path" element={<TextAlongPathDemo />} />
        <Route path="/text-bounce" element={<BouncyTextDemo />} />
        {/* Input */}
        <Route path="/ripple-button" element={<RippleButtonDemo />} />
        <Route path="/interactive-hover-button" element={<InteractiveHoverDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
