import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { RippleButtonTransform } from "../../utils/types";

interface Props {
    children: string;     // Button Text
    className?: string;   // Optional styling
    onClick: () => void;  // Button logic
    rippleColor?: string; // Color of ripple
    duration?: number;    // Ripple animation duration / lifetime (ms)
}

/**
 * Custom Button that causes a ripple visual effect when clicking it.
 * Stores ripples in an Array + Eventually check the lifetime of the ripple before removing from Array
 */
const RippleButton = ({
    children,
    className="",
    onClick,
    duration=500,
    rippleColor="#ff0000"
}: Props) => {
    const [buttonRipples, setButtonRipples] = useState<Array<RippleButtonTransform>>([]);
    /**
     * Create a ripple at location clicked on.
     * key is set to current Date to make it easier to delete in useEffect hook
     */
    const createRipple = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        const newRipple: RippleButtonTransform = {
            x: x,
            y: y,
            size: size,
            key: Date.now()
        };
        setButtonRipples([...buttonRipples, newRipple]);
    }
    /**
     * Periodically delete the last ripple created
     */
    useEffect(() => {
        if (buttonRipples.length > 0) {
            const lastRipple = buttonRipples[buttonRipples.length - 1];
            const timeout = setTimeout(() => {
                setButtonRipples(prev => {
                    return prev.filter(ripple => ripple.key !== lastRipple.key);
                });
            }, duration);
            return () => clearTimeout(timeout);
        }
    }, [buttonRipples]);
    return (
        <button
            className={twMerge(
                className,
                "cursor-pointer border-2 border-[#818181] rounded-xl overflow-hidden"
            )}
            onClick={(e: React.MouseEvent) => {
                onClick();
                createRipple(e);
            }}
        >
            <div className="relative px-4 py-2">
                {children}
                {buttonRipples.map(ripple => {
                    const {
                        x,
                        y,
                        size,
                        key
                    } = ripple;
                    return (
                        <motion.span 
                            key={key}
                            className="rounded-full absolute opacity-30"
                            style={{
                                backgroundColor: rippleColor
                            }}
                            initial={{
                                top: y,
                                left: x,
                                width: size,
                                height: size,
                                scale: 0
                            }}
                            animate={{
                                opacity: [0.6, 0],
                                scale: [0, 1, 2],
                            }}
                            transition={{
                                duration: duration / 1000,
                                ease: "easeOut"
                            }}
                        />
                    );
                })}
            </div>
        </button>
    );
}

export default RippleButton;