import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

interface Props {
    className?: string;
    words: string[];
    duration?: number;
}

/**
 * Animate groups of text using Framer Motion to rotate vertically across the screen.
 * Have enter and exit animations that trigger on re-render:
 * When changing the current index of what word to display, trigger exit animation for old word and enter animation for new word.
 */
const TextRotate = ({
    className="",
    words,
    duration=2500
}: Props) => {
    const [index, setIndex] = useState<number>(0);
    /**
     * 
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);
        }, duration);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className="overflow-hidden py-2">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={words[index]}
                    className={className}
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: 50,
                    }}
                    transition={{
                        duration: 0.25,
                        ease: "easeOut"
                    }}
                >
                    {words[index]}
                </motion.h1>
            </AnimatePresence>
        </div>
    );
}

export default TextRotate;

// initial: { opacity: 0, y: -50 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 50 },
//     transition: { duration: 0.25, ease: "easeOut" },