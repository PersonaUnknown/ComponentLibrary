import { motion } from "motion/react";
import { useState } from "react";
import { moveScaleAnim, scaleAnim, yAnim } from "../../utils/anim";

interface Props {
    children: string; // Input text
    className?: string; // Class Styling
    animType?: "y" | "scale" | "move-scale"; // The type of animation to play
    delay?: number; // Custom delay between characters
}

/**
 * Bouncy Animated Text component
 */
const BouncyText = ({
    children,
    className="",
    animType="y",
    delay=0.2
}: Props) => {
    const [_, setIsHovered] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    const getAnim = () => {
        switch (animType) {
            case "y":
                return yAnim;
            case "move-scale":
                return moveScaleAnim;
            case "scale":
                return scaleAnim;
            default:
                return yAnim;
        }
    }
    const anim = getAnim();
    return (
        <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children.split("").map((letter, index) => {
                const key = `letter-${index}`;
                return (
                    <motion.span 
                        key={key}
                        className="inline-block"
                        initial={anim.initial}
                        animate={anim.animate}
                        transition={{
                            delay: delay * (index + 1),
                            duration: 1,
                            ease: "linear",
                            repeat: Number.POSITIVE_INFINITY
                        }}
                    >
                        {letter}
                    </motion.span>
                );
            })}
        </div>
    );
}

export default BouncyText;