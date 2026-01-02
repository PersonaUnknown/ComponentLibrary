import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props {
    header: string;
    content: string;
    className?: string;
}

/**
 * Animated Accordion Component that shows and hides content by expanding and contracting content area.
 * @prop header: label text for button that toggles accordion content
 * @prop content: accordion content that gets shown or hidden
 * @prop className: class name to apply border stylings <-- implemented for FAQ section 
 */
const Accordion = ({
    header,
    content,
    className=""
}: Props) => {
    const [openState, setOpenState] = useState<boolean>(false);
    const accordionContentRef = useRef<HTMLDivElement>(null);
    const accordionArrowRef = useRef<HTMLDivElement>(null);
    /**
     * Opens and closes accordion container
     */
    const toggleAccordion = () => {
        const newState = !openState;
        setOpenState(newState);
        if (accordionContentRef.current) {
            const scrollHeight = `${accordionContentRef.current.scrollHeight}px`;
            accordionContentRef.current.style.maxHeight = newState ? scrollHeight : "0px";
        }
        if (accordionArrowRef.current) {
            accordionArrowRef.current.style.transform = newState ? "rotate(90deg)" : "rotate(0deg)";
        }
    }
    return (
        <div className={twMerge(
                "px-0 py-4",
                className
            )}
        >
            <button
                type="button"
                className="text-2xl font-medium w-full flex flex-row bg-transparent border-0"
                onClick={toggleAccordion}
            >
                <div className="text-xl md:text-2xl text-start font-medium w-full flex flex-row bg-transparent border-0">
                    {header}
                </div>
                <div
                    ref={accordionArrowRef}
                    className="transition-transform duration-250 ease-out ml-auto my-auto"
                >
                    <MdOutlineKeyboardArrowRight 
                        size={35}
                        color="black"
                    />
                </div>
            </button>
            <div 
                className="max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out text-base md:text-lg"
                ref={accordionContentRef}
            >
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Accordion;