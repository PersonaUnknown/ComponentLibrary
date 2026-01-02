import {
	forwardRef,
	type Ref,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { twMerge } from "tailwind-merge";
import type { TypewriterRef } from "../../utils/refs";

interface Props {
	children?: string; // Input string text (use if you want only one word)
	words?: string[]; // Input multiple words (use if you want typewriter to transition to multiple words)
	delay?: number; // ms delay between typed characters
	pauseDelay?: number; // ms delay between typing forward and backward (pause section)
	onStart?: boolean; // Whether to play the animation immediately or not (if not, requires manual function call to start the animation)
	loop?: boolean; // Whether to loop animation (where text is typed forward and back)
	showCursor?: boolean; // To display cursor or not
	blinkCursor?: boolean; // Whether to have the cursor blink or not
	cursor?: "line" | "underscore"; // Display cursor as a line or underscore
}

/**
 * Typewriter component that animates text being typed out like a typewriter is writing it.
 * Supports single word, multiple words, w/o animated cursor, etc.
 * Min height set for container for better demo-ing (can be adjusted in Tailwind classes).
 * useRef used because useState was too slow to update certain values (and thus didn't work).
 * State represented in FSM-esque fashion, using useState to store what action the typewriter is doing.
 */
const Typewriter = forwardRef(
	(
		{
			children = "",
			words = [],
			delay = 150,
			pauseDelay = 500,
			onStart = true,
			loop = false,
			showCursor = true,
			blinkCursor = true,
			cursor = "line",
		}: Props,
		ref: Ref<TypewriterRef>,
	) => {
		const [text, setText] = useState<string>(""); // For single word typewriters
		const wordIndexRef = useRef<number>(0); // For multiple word typewriters
		const stateRef = useRef<"forward" | "pause" | "backward">("forward"); // Used when checking which direction to type and cursor styling
		const activeProcesses = useRef<number[]>([]); // Keeps track of all setTimeout and setInterval usage and removes all instances when resetting typewriter
		const displayMode = children === "" ? "multi" : "single";
		/**
		 * Delete all active processes from typewriter
		 */
		const deleteProcesses = () => {
			for (const process of activeProcesses.current) {
				clearInterval(process);
			}
			activeProcesses.current = [];
		};
		/**
		 * Reset parameters to default values
		 */
		const startTyping = () => {
			deleteProcesses();
			setText("");
			wordIndexRef.current = 0;
			stateRef.current = "forward";
			typeForward();
		};
		/**
		 * Type characters towards the target word
		 */
		const typeForward = () => {
			stateRef.current = "forward";
			if (displayMode === "multi") {
				let currText = "";
				let index = 0;
				const currTarget = words[wordIndexRef.current];
				const interval = setInterval(() => {
					if (index > currTarget.length) {
						clearInterval(interval);
						typePause();
					}
					setText(currText);
					currText = currTarget.substring(0, index);
					index++;
				}, delay);
				activeProcesses.current.push(interval);
			} else {
				let currText = "";
				let index = 0;
				if (text !== children) {
					setText("");
				}
				const interval = setInterval(() => {
					if (index > children.length) {
						clearInterval(interval);
						typePause();
					}
					setText(currText);
					currText = children.substring(0, index);
					index++;
				}, delay);
				activeProcesses.current.push(interval);
			}
		};
		/**
		 * Wait out pause delay before typing backwards
		 */
		const typePause = () => {
			const prevState = stateRef.current;
			stateRef.current = "pause";
			if (
				!loop &&
				displayMode === "multi" &&
				wordIndexRef.current === words.length - 1
			) {
				return;
			} else if (!loop && displayMode === "single") {
				return;
			}
			if (prevState === "backward" && displayMode === "multi") {
				wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
			}
			const timeout = setTimeout(() => {
				if (prevState === "forward") {
					typeBackward();
				} else if (prevState === "backward") {
					typeForward();
				}
			}, pauseDelay);
			activeProcesses.current.push(timeout);
		};
		/**
		 * Backspace / Delete characters from a fully typed word
		 */
		const typeBackward = () => {
			stateRef.current = "backward";
			if (displayMode === "multi") {
				let currText = words[wordIndexRef.current];
				const currTarget = words[wordIndexRef.current];
				let index = currTarget.length - 1;
				const interval = setInterval(() => {
					if (index < 0) {
						clearInterval(interval);
						typePause();
					}
					setText(currText);
					currText = currTarget.substring(0, index);
					index--;
				}, delay);
				activeProcesses.current.push(interval);
			} else {
				let currText = children;
				let index = children.length - 1;
				if (text !== children) {
					setText(children);
				}
				const interval = setInterval(() => {
					if (index < 0) {
						clearInterval(interval);
						typePause();
					}
					setText(currText);
					currText = children.substring(0, index);
					index--;
				}, delay);
				activeProcesses.current.push(interval);
			}
		};
		/**
		 * Return the current cursor state
		 */
		const getCursor = () => {
			if (
				displayMode === "single" &&
				(text === children || text === "") &&
				!showCursor
			) {
				return "";
			}
			return cursor === "line" ? "|" : "_";
		};
		/**
		 * TypewriterRef handler
		 */
		useImperativeHandle(ref, () => ({
			typeForward,
			startTyping,
		}));
		/**
		 * If the onStart field is set, start the animation on component render
		 */
		// biome-ignore lint/correctness/useExhaustiveDependencies(onStart): only call once
		// biome-ignore lint/correctness/useExhaustiveDependencies(typeForward): only call once
		useEffect(() => {
			if (onStart) {
				typeForward();
			}
		}, []);
		return (
			<div className="flex justify-center items-center min-h-6">
				{text}
				{showCursor && (
					<span
						className={twMerge(
							"inline-block",
							stateRef.current !== "pause"
								? "opacity-100"
								: blinkCursor
									? "animate-blink"
									: "opacity-100",
						)}
					>
						{getCursor()}
					</span>
				)}
			</div>
		);
	},
);

export default Typewriter;
