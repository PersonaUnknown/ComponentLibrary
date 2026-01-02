import {
	forwardRef,
	type Ref,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import type { TextAlongPathRef } from "../../utils/refs";

interface Props {
	children: string; // Input text
	path: string; // SVG Path definition
	className?: string; // Optional styling
	fill?: string; // Custom <path> fill
	startOffset?: string; // Starting offset of <textPath>
	strokeColor?: string; // Custom Path Color
	strokeWidth?: number; // Custom Path stroke width
	viewBox?: string; // Custom SVG Viewbox
}

/**
 * Text that can is displayed along a non-linear path (implemented using SVGs)
 */
const TextAlongPath = forwardRef(
	(
		{
			children,
			path,
			fill = "none",
			className = "",
			startOffset = "0%",
			strokeColor = "",
			strokeWidth = 1,
			viewBox = "",
		}: Props,
		ref: Ref<TextAlongPathRef>,
	) => {
		const [textOffset, setTextOffset] = useState<string>(startOffset);
		const activeProcesses = useRef<number[]>([]);
		const offsetRef = useRef<number>(
			Number.parseInt(startOffset.replaceAll("%", ""), 10),
		);
		/**
		 * Clear processes
		 */
		const clearProcesses = () => {
			for (const process of activeProcesses.current) {
				clearInterval(process);
			}
			activeProcesses.current = [];
		};
		/**
		 * Playback Animations
		 */
		const play = () => {
			if (activeProcesses.current.length > 0) {
				clearProcesses();
			}
			const process = setInterval(() => {
				if (offsetRef.current >= 100) {
					setTextOffset("100%");
					offsetRef.current = 100;
					clearInterval(process);
					activeProcesses.current = [];
				}
				offsetRef.current++;
				setTextOffset(`${offsetRef.current}%`);
			}, 50);
			activeProcesses.current.push(process);
		};
		const rewind = () => {
			if (activeProcesses.current.length > 0) {
				clearProcesses();
			}
			const process = setInterval(() => {
				if (offsetRef.current <= -100) {
					setTextOffset("-100%");
					offsetRef.current = -100;
					clearInterval(process);
					activeProcesses.current = [];
				}
				offsetRef.current--;
				setTextOffset(`${offsetRef.current}%`);
			}, 50);
			activeProcesses.current.push(process);
		};
		const pause = () => {
			clearProcesses();
		};
		const reset = () => {
			clearProcesses();
			setTextOffset("0%");
			offsetRef.current = 0;
		};
		/**
		 * TextAlongPathRef handler
		 */
		useImperativeHandle(ref, () => ({
			play,
			rewind,
			pause,
			reset,
		}));
		return (
			<div>
				<svg className={className} viewBox={viewBox} role="presentation">
					<path
						id="curve"
						fill={fill}
						stroke={strokeColor}
						strokeWidth={strokeWidth}
						d={path}
					/>
					<text>
						<textPath href="#curve" startOffset={textOffset}>
							{children}
						</textPath>
					</text>
				</svg>
				{textOffset}
			</div>
		);
	},
);

export default TextAlongPath;
