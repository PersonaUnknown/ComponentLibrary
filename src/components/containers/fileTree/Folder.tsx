import { Fragment, useEffect, useRef, useState } from "react";
import { FaRegFolderClosed, FaRegFolderOpen } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface Props {
	value: string;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	closedIcon?: React.ReactNode;
	openIcon?: React.ReactNode;
}

/**
 * Row representing a folder in file directory.
 * Consists of a folder image (can be custom) + folder name.
 * Can be pressed to open and close like an accordion.
 */
const Folder = ({
	value,
	children,
	className = "",
	closedIcon = null,
	openIcon = null,
}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [currMaxHeight, setCurrMaxHeight] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const getButtonIcon = () => {
		if (isOpen) {
			return openIcon === null ? <FaRegFolderOpen /> : openIcon;
		}
		return closedIcon === null ? <FaRegFolderClosed /> : closedIcon;
	};
	const toggleFolder = () => {
		const newState = !isOpen;
		setIsOpen(newState);
	};
	/**
	 * Adjust the max height of content to match if container is open or closed.
	 * Uses scrollHeight because it keeps track of height outside of what is rendered.
	 * Since the child content can vary in height based on nested Folder components, keep track of the max scrollHeight to ensure nothing is cut-off.
	 * NOTE: Max scrollHeight can be found by having the isOpen state default to true
	 */
	useEffect(() => {
		if (containerRef.current) {
			const scrollHeight = containerRef.current.scrollHeight;
			if (scrollHeight > currMaxHeight) {
				setCurrMaxHeight(scrollHeight);
				containerRef.current.style.maxHeight = isOpen
					? `${scrollHeight}px`
					: "0px";
			} else {
				containerRef.current.style.maxHeight = isOpen
					? `${currMaxHeight}px`
					: "0px";
			}
		}
	}, [isOpen, currMaxHeight]);
	return (
		<div className={twMerge("w-full flex flex-col gap-1", className)}>
			<button
				type="button"
				className="flex flex-row gap-1 items-center cursor-pointer"
				onClick={toggleFolder}
			>
				{getButtonIcon()}
				{value}
			</button>
			<div
				className="overflow-hidden transition-[max-height] duration-200 ease-out pl-4"
				ref={containerRef}
			>
				{Array.isArray(children)
					? children.map((child, index) => {
							const key = `child-${index}`;
							return <Fragment key={key}>{child}</Fragment>;
						})
					: children}
			</div>
		</div>
	);
};

export default Folder;
