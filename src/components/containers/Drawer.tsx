import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import type { DrawerRef } from "../../utils/refs";

interface Props {
	side?: "left" | "right" | "top" | "bottom";
	buttonContent: React.ReactNode;
	content: React.ReactNode;
	staticModal?: boolean;
}

/**
 * Container that slides into view
 */
const Drawer = forwardRef<DrawerRef, Props>(
	({ buttonContent, content, side = "left", staticModal = false }, ref) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);
		const drawerRef = useRef<HTMLButtonElement>(null);
        /**
         * Open and Close Drawer
         */
		const openDrawer = () => {
			setIsOpen(true);
		};
		const hideDrawer = () => {
			setIsOpen(false);
		};
        /**
         * Close drawer when clicking outside
         */
		// biome-ignore lint/correctness/useExhaustiveDependencies(hideDrawer): no infinite loops
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				const dialog = drawerRef.current;
				if (dialog && isOpen) {
					const rect = dialog.getBoundingClientRect();
					const isInDialog =
						rect.top <= event.clientY &&
						event.clientY <= rect.top + rect.height &&
						rect.left <= event.clientX &&
						event.clientX <= rect.left + rect.width;
					if (!isInDialog) {
						hideDrawer();
					}
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [isOpen]);
		// Prevent body scroll when drawer is open
		useEffect(() => {
			if (isOpen) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "";
			}
			return () => {
				document.body.style.overflow = "";
			};
		}, [isOpen]);
        /**
         * Get Tailwind classes to position drawer
         */
		const getPositionClasses = (): string => {
			switch (side) {
				case "top":
					return "absolute top-0 inset-x-0 w-full h-screen sm:h-1/4 md:h-1/3 lg:h-1/2 xl:h-2/3";
				case "bottom":
					return "absolute bottom-0 inset-x-0 h-screen sm:h-1/4 md:h-1/3 lg:h-1/2 xl:h-2/3";
				case "left":
					return "absolute inset-y-0 left-0 w-screen sm:w-64 md:w-80 lg:w-96 xl:w-[30rem]";
				case "right":
					return "absolute inset-y-0 right-0 w-screen sm:w-64 md:w-80 lg:w-96 xl:w-[30rem]";
				default:
					return "";
			}
		};
		const getTransform = (): string => {
			if (!isOpen) {
				switch (side) {
					case "top":
						return "translateY(-100%)";
					case "right":
						return "translateX(100%)";
					case "bottom":
						return "translateY(100%)";
					case "left":
						return "translateX(-100%)";
					default:
						return "translateX(100%)";
				}
			}
			return "translate(0, 0)";
		};
        /**
         * DrawerRef handler
         */
		useImperativeHandle(ref, () => ({
			onShow: openDrawer,
			onHide: hideDrawer,
		}));
		return (
			<>
				<button
					type="button"
					onClick={openDrawer}
					className="flex items-center"
				>
					{buttonContent}
				</button>
				{
                    createPortal(
                        <>
                            {isOpen && <div className="absolute inset-0 bg-[#00000080]" />}
                            <button
                                ref={drawerRef}
                                type="button"
                                className={twMerge(
                                    "fixed inset-0 flex transition-transform duration-300 ease-in-out",
                                )}
                                style={{ transform: getTransform() }}
                                onClick={() => {
                                    if (!staticModal) {
                                        hideDrawer();
                                    }
                                }}
                            >
                                <div className={getPositionClasses()}>{content}</div>
                            </button>
                        </>,
                        document.body
                    )
                }
			</>
		);
	},
);

export default Drawer;
