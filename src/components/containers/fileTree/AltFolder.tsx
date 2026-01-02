import { Fragment, useEffect, useRef, useState } from "react";
import { FaRegFolderClosed, FaRegFolderOpen } from "react-icons/fa6";

interface Props {
	value: string;
	children: React.ReactNode | React.ReactNode[];
	closedIcon?: React.ReactNode;
	openIcon?: React.ReactNode;
}

/**
 * Row representing a folder in file directory.
 * Consists of a folder image (can be custom) + folder name.
 * Can be pressed to open and close like an accordion.
 * Is not animated. If need animated component, use Folder component
 */
const AltFolder = ({
	value,
	children,
	closedIcon = null,
	openIcon = null,
}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
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
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.maxHeight = isOpen ? "100%" : "0px";
		}
	}, [isOpen]);
	return (
		<div className="w-full flex flex-col gap-1">
			<button
				type="button"
				className="flex flex-row gap-1 items-center cursor-pointer"
				onClick={toggleFolder}
			>
				{getButtonIcon()}
				{value}
			</button>
			<div className="overflow-hidden translate-x-4" ref={containerRef}>
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

export default AltFolder;
