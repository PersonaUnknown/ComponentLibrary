import { twMerge } from "tailwind-merge";

interface Props {
	children: string;
	className?: string;
	highlightColor?: string;
	duration?: number;
}

/**
 * Text component that gets highlighted when you hover it
 */
const TextHighlight = ({
	children,
	className = "",
	highlightColor = "#ff0000",
	duration = 300,
}: Props) => {
	return (
		<div className={twMerge("relative inline-block p-1 group", className)}>
			<span className="relative z-20">
				<div className="flex flex-row gap-2">{children}</div>
			</span>
			<span
				className={
					"absolute left-0 w-0 top-0 group-hover:w-full h-full z-10 transition-all"
				}
				style={{
					backgroundColor: highlightColor,
					transition: `${duration}ms`,
				}}
			/>
		</div>
	);
};

export default TextHighlight;
