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
import TextRotateDemo from "./pages/text/TextRotateDemo";
import TypewriterDemo from "./pages/TypewriterDemo";
import AccordionDemo from "./pages/container/AccordionDemo";
import CarouselDemo from "./pages/container/CarouselDemo";
import InteractiveHoverDemo from "./pages/input/InteractiveHoverDemo";
import RippleButtonDemo from "./pages/input/RippleButtonDemo";
import TextHighlightDemo from "./pages/text/TextHighlightDemo";

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
        <Route path="/text-rotate" element={<TextRotateDemo />} />
        <Route path="/text-highlight" element={<TextHighlightDemo />} />
        {/* Input */}
        <Route path="/ripple-button" element={<RippleButtonDemo />} />
        <Route path="/interactive-hover-button" element={<InteractiveHoverDemo />} />
        {/* Container */}
        <Route path="/accordion" element={<AccordionDemo />} />
        <Route path="/carousel" element={<CarouselDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
