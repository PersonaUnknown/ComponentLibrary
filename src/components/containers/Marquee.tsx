import { twMerge } from "tailwind-merge";

interface Props {
	children: React.ReactNode[];
	direction?: "horizontal" | "vertical"; // The direction the content will flow
	speed?: "fast" | "slow"; // How fast the marquee moves / content travels
	reverse?: boolean; // Whether to reverse the flow of the content (ex: reversing horizontal flow makes content go to the left instead of right)
}

/**
 * Infinitely scrolling content container using CSS Animations.
 * React-based implementation of this: https://www.youtube.com/watch?v=iLmBy-HKIAw.
 */
const Marquee = ({ 
	children,
	direction="horizontal",
	reverse=false,
	speed="slow",
}: Props) => {
	return (
		<div
			className={twMerge(
				"max-w-full overflow-hidden",
				direction === "horizontal" ? "marquee-horiz-mask" : "marquee-vert-mask"
			)}
		>
			<div
				className={twMerge(
					"flex w-max py-4 gap-4",
					direction === "horizontal" ? 
						"flex-row animate-marquee-scroll-x" : 
						"flex-col animate-marquee-scroll-y"
				)}
				style={{
					animationDirection: reverse ? "reverse" : "normal",
					animationDuration: speed === "fast" ? "20s" : "60s"
				}}
			>
				{/* Original set of elements */}
				{[...children].map((child, index) => {
					const key = `marquee-${index}`;
					return (
						<div key={key}>
							{child}
						</div>	
					);
				})}
				{/* Duplicate set of elements that are aria hidden to not show on screen readers */}
				{[...children].map((child, index) => {
					const key = `marquee-duplicate-${index}`;
					return (
						<div 
							aria-hidden="false" 
							key={key}
						>
							{child}
						</div>	
					);
				})}
			</div>
		</div>
	);
};

export default Marquee;
