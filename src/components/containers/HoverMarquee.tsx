import { type AnimationPlaybackControlsWithThen, animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode[];
    direction?: "horizontal" | "vertical"; // The direction the content will flow
    reverse?: boolean; // Whether to reverse the flow of the content (ex: reversing horizontal flow makes content go to the left instead of right)
    onHoverSpeed?: "slower" | "stop";
}

/**
 * Infinitely scrolling content container using Framer Motion and react-use-measure hook.
 * Finds the dimensions of container and translates the marquee w/ Framer Motion instead of with CSS, allowing for custom speeds when hovering over marquee.
 * Taken from this: https://www.youtube.com/watch?v=Ot4nZ6UjJLE.
 */
const HoverMarquee = ({ 
    children,
    direction="horizontal",
    reverse=false,
    onHoverSpeed="slower"
}: Props) => {
    const [ref, { width, height }] = useMeasure(); 
    const translation = useMotionValue<number>(0);
    const [stop, setStop] = useState<boolean>(false);
    const [mustFinish, setMustFinish] = useState<boolean>(false);
    const [rerender, setRerender] = useState<boolean>(false);
    const FAST_DURATION = 20;
    const SLOW_DURATION = 60;
    const [duration, setDuration] = useState<number>(FAST_DURATION);
    /**
     * Recreate CSS Animation from Marquee component with Framer Motion + useMeasure hook
     * Trigger re-render on hover and have new animation start from current translation
     */
    useEffect(() => {
        // Stop animating if on hover stops marquee 
        if (stop) {
            return;
        }
        // Set up animation parameters
        const targetPosition = direction === "horizontal" ?
            (-width / 2 - 8) :
            (-height / 2 - 8);
        // Begin animation
        let animation: AnimationPlaybackControlsWithThen | null = null;
        const useDefaultRange = (reverse && direction === "horizontal") || (!reverse && direction === "vertical");
        if (mustFinish) {
            const animRange = useDefaultRange ? 
                [translation.get(), 0] : 
                [translation.get(), targetPosition];
            const animDuration = useDefaultRange ? 
                duration * (translation.get() / targetPosition) : 
                duration * (1 - translation.get() / targetPosition);
            animation = animate(
                translation, animRange, {
                    ease: "linear",
                    duration: animDuration,
                    onComplete: () => {
                        setMustFinish(false);
                        setRerender(!rerender);
                    }
                }
            );
        } else {
            const animRange = useDefaultRange ? 
                [targetPosition, 0] : 
                [0, targetPosition];
            animation = animate(
                translation, animRange, {
                    ease: "linear",
                    repeatType: "loop",
                    repeat: Number.POSITIVE_INFINITY,
                    duration: duration,
                    repeatDelay: 0
                }
            );
        }
        return animation?.stop;
    }, [direction, reverse, duration, stop, rerender, mustFinish, width, height, translation]);
    return (
        <div
			className={twMerge(
				"max-w-full h-full overflow-hidden",
				direction === "horizontal" ? "marquee-horiz-mask" : "marquee-vert-mask"
			)}
		>
			<motion.div
                ref={ref}
                className={twMerge(
					"flex w-max gap-4",
					direction === "horizontal" ? "flex-row py-4" : "flex-col px-4"
				)}
                style={
                    direction === "horizontal" ? {
                        x: translation
                    }: {
                        y: translation
                    }
                }
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                    if (onHoverSpeed === "stop") {
                        setStop(true);
                    }
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                    setStop(false);
                }}
			>
				{/* Original set of elements */}
				{[...children].map((child, index) => {
					const key = `marquee-${index}`;
					return (
						<div key={key}>
							{child}
						</div>	
					);
				})}
				{/* Duplicate set of elements that are aria hidden to not show on screen readers */}
				{[...children].map((child, index) => {
					const key = `marquee-duplicate-${index}`;
					return (
						<div 
							aria-hidden="false" 
							key={key}
						>
							{child}
						</div>	
					);
				})}
			</motion.div>
		</div>
    );
};

export default HoverMarquee;
