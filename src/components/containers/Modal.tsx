import { AnimatePresence, motion } from "motion/react";
import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import type { ModalRef } from "../../utils/refs";

interface Props {
	buttonContent: React.ReactNode;
	content: React.ReactNode;
	position?:
		| "top-left"
		| "top-center"
		| "top-right"
		| "center-left"
		| "center"
		| "center-right"
		| "bottom-left"
		| "bottom-center"
		| "bottom-right";
	backdrop?: boolean;
	staticModal?: boolean;
}

/**
 * Modal component thats pops up to cover content that made it pop in.
 * Create the modal with the content (which is made the child of a <button>).
 */
const Modal = forwardRef<ModalRef, Props>(
	(
		{
			buttonContent,
			content,
			position = "center",
			backdrop = true,
			staticModal = false,
		},
		ref,
	) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);
		const dialogRef = useRef<HTMLButtonElement>(null);
		const openModal = () => {
			setIsOpen(true);
		};
		const closeModal = () => {
			setIsOpen(false);
		};
        /**
         * Checks to close the modal if the user clicks outside the modal and the prop is set to allow it
         */
		// biome-ignore lint/correctness/useExhaustiveDependencies(closeModal): no infinite loops
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				const dialog = dialogRef.current;
				if (dialog && isOpen) {
					const rect = dialog.getBoundingClientRect();
					const isInDialog =
						rect.top <= event.clientY &&
						event.clientY <= rect.top + rect.height &&
						rect.left <= event.clientX &&
						event.clientX <= rect.left + rect.width;
					if (!isInDialog) {
						closeModal();
					}
				}
			};
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [isOpen]);
		/**
         * Get appropriate Tailwind classes to adjust how the modal will be centered / positioned
         */
		const getCenteringStyle = (): string => {
			switch (position) {
				case "top-left":
					return "justify-start items-start";
				case "top-center":
					return "justify-center items-start";
				case "top-right":
					return "justify-end items-start";
				case "center-left":
					return "items-center justfy-start";
				case "center":
					return "justify-center items-center";
				case "center-right":
					return "items-center justify-end";
				case "bottom-left":
					return "justify-start items-end";
				case "bottom-center":
					return "items-end justify-center";
				default:
					return "justify-end items-end";
			}
		};
        /**
         * ModalRef handler
         */
        useImperativeHandle(ref, () => ({
			onShow: openModal,
			onHide: closeModal,
		}));
		return (
			<>
				<button type="button" onClick={openModal} className="flex items-center">
					{buttonContent}
				</button>
                {
                    isOpen &&
                    createPortal(
                        <AnimatePresence>
                            {backdrop && <div className="absolute inset-0 bg-[#00000080]" />}
                            <motion.button
                                ref={dialogRef}
                                className={twMerge("fixed inset-0 flex", getCenteringStyle())}
                                type="button"
                                onClick={() => {
                                    if (!staticModal) {
                                        closeModal();
                                    }
                                }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", duration: 0.5 }}
                            >
                                {content}
                            </motion.button>
                        </AnimatePresence>,
                        document.body
                    )
                }
			</>
		);
	},
);

export default Modal;
