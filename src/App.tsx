import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AccordionDemo from "./pages/container/AccordionDemo";
import CarouselDemo from "./pages/container/CarouselDemo";
import DrawerDemo from "./pages/container/DrawerDemo";
import FileTreeDemo from "./pages/container/FileTreeDemo";
import MarqueeDemo from "./pages/container/MarqueeDemo";
import ModalDemo from "./pages/container/ModalDemo";
import HomePage from "./pages/HomePage";
import DualSliderDemo from "./pages/input/DualSliderDemo";
import InteractiveHoverDemo from "./pages/input/InteractiveHoverDemo";
import RippleButtonDemo from "./pages/input/RippleButtonDemo";
import BouncyTextDemo from "./pages/text/BouncyTextDemo";
import ExplosiveTextDemo from "./pages/text/ExplosiveTextDemo";
import TextAlongPathDemo from "./pages/text/TextAlongPathDemo";
import TextRandomizerDemo from "./pages/text/TextRandomizerDemo";
import TypewriterDemo from "./pages/text/TypewriterDemo";
import TextHighlightDemo from "./pages/text/TextHighlightDemo";
import TextRotateDemo from "./pages/text/TextRotateDemo";
import TooltipDemo from "./pages/text/TooltipDemo";

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
				<Route path="/text-tooltip" element={<TooltipDemo />} />
				{/* Input */}
				<Route path="/ripple-button" element={<RippleButtonDemo />} />
				<Route path="/dual-slider" element={<DualSliderDemo />} />
				<Route
					path="/interactive-hover-button"
					element={<InteractiveHoverDemo />}
				/>
				{/* Container */}
				<Route path="/accordion" element={<AccordionDemo />} />
				<Route path="/carousel" element={<CarouselDemo />} />
				<Route path="/drawer" element={<DrawerDemo />} />
				<Route path="/file-tree" element={<FileTreeDemo />} />
				<Route path="/modal" element={<ModalDemo />} />
				<Route path="/marquee" element={<MarqueeDemo />} />
			</Routes>
		</Router>
	);
};

export default App;
