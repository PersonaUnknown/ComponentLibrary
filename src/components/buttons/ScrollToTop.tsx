import { motion } from "framer-motion";
import { TiArrowSortedUp } from "react-icons/ti";

/**
 * Button that scrolls content back to top of page 
 */
const ScrollToTop = () => {
    // Methods
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    // Render
    return (
        <motion.button
            type="button"
            onClick={scrollTop}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 },
            }}
            className="rounded-full size-24 bg-white border-6 border-sky-300 text-sky-300 cursor-pointer aspect-square p-4"
        >
            <div className="relative w-full h-full">
                <TiArrowSortedUp size={40} className="mx-auto text-sky-300 absolute -top-2 inset-x-0" />
                <span className="font-bold text-sm absolute bottom-2 inset-x-0">
                    TO TOP
                </span>
            </div>
        </motion.button>
    );
}

export default ScrollToTop;