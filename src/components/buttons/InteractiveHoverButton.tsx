import { FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface Props {
	children: string; // Button Text
	className?: string; // Optional Styling
	onClick: () => void; // Button logic
}

/**
 * Button Component from: https://magicui.design/docs/components/interactive-hover-button.
 * Button consists of black dot and text. Hovering over black dot expands it by 100 times to fully cover button.
 * When hovered, the original text is faded out and the same text is faded in with different text color to match the black dot / new background.
 * Translation offset for new text should be based off the horizontal padding / margins to completely cover the parent container.
 */
const InteractiveHoverButton = ({
	children,
	className = "",
	onClick,
}: Props) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={twMerge(
				"relative group w-auto cursor-pointer border-2 border-[#e5e5e5] px-6 py-2 rounded-full overflow-hidden",
				className,
			)}
		>
			<div className="flex items-center gap-2">
				<div className="bg-black h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100]"></div>
				<span className="transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
					{children}
				</span>
			</div>
			<div className="w-full h-full text-white z-10 absolute top-0 flex items-center justify-center -translate-x-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
				<div className="flex flex-row items-center gap-2 translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
					{children}
					<FaArrowRightLong size={20} />
				</div>
			</div>
		</button>
	);
};

export default InteractiveHoverButton;
