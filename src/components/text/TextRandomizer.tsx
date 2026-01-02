import { useRef, useState } from "react";

interface Props {
	children: string; // Input string to animate
	className?: string; // Optional styling for text / container
	delay?: number; // Pause delay between randomized iterations
	iterationOffset?: number; // Amount to offset iterations to adjust how the animation is displayed
}

/**
 * Randomize the characters of text when hovering over it
 */
const TextRandomizer = ({
	children,
	className = "",
	delay = 30,
	iterationOffset = 1,
}: Props) => {
	const [text, setText] = useState<string>(children);
	const activeProcesses = useRef<number[]>([]);
	const clearProcesses = () => {
		for (const process of activeProcesses.current) {
			clearInterval(process);
		}
		activeProcesses.current = [];
	};
	const randomizeEffect = () => {
		let iterations = 0;
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const interval = setInterval(() => {
			const newText = text
				.split("")
				.map((_, index) => {
					if (index < iterations) {
						return children.charAt(index);
					}
					const randomLetter = letters[Math.floor(Math.random() * 26)];
					return randomLetter;
				})
				.join("");
			setText(newText);
			if (iterations >= text.length) {
				clearProcesses();
			}
			iterations += iterationOffset;
		}, delay);
		activeProcesses.current.push(interval);
	};
	const clearEffect = () => {
		clearProcesses();
		setText(children);
	};
	return (
		<div
			role="tooltip"
			className={className}
			onMouseEnter={randomizeEffect}
			onMouseLeave={clearEffect}
		>
			{text}
		</div>
	);
};

export default TextRandomizer;
