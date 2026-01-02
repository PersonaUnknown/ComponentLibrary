import { useCallback, useEffect, useState } from "react";
import type { Transform } from "../../utils/types";

interface Props {
	children: string;
	className?: string; // Optional word styling
	alwaysRandom?: boolean; // If the on hover effect should be different on every hover event
	transforms?: Transform[]; // If the user wants to create their own manual explosion
}

/**
 * Scatter the characters of text when hovering over it, as if an exposion hit the center of the word.
 * Store random transformation for each letter of the text so that it stays constant
 */
const ExplosiveText = ({
	children,
	className = "",
	alwaysRandom = false,
	transforms = [],
}: Props) => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const [randomTransforms, setRandomTransforms] = useState<Transform[]>(
		new Array(children.length).fill({}),
	);
	const [transformsRolled, setTransformsRolled] = useState<boolean>(false);
	/**
	 * Handle mouse events
	 */
	const onMouseOver = () => {
		setIsMouseOver(true);
		if (!transformsRolled || alwaysRandom) {
			explodeEffect();
		}
	};
	const onMouseLeave = () => {
		setIsMouseOver(false);
	};
	/**
	 * Generate random rotations and translations to be used for on-hover animations
	 */
	const explodeEffect = useCallback(() => {
		const newTransforms: Transform[] = [];
		let rotationSign = 1;
		for (const _ of children) {
			const randomRotation = Math.floor(Math.random() * 15) * rotationSign; // Range from -10 to 10 degrees
			const randomX =
				Math.floor(Math.random() * 20) * (Math.round(Math.random()) * 2 - 1);
			const randomY =
				Math.floor(Math.random() * 20) * (Math.round(Math.random()) * 2 - 1);
			newTransforms.push({
				rotation: randomRotation,
				translateX: randomX,
				translateY: randomY,
			});
			rotationSign *= -1;
		}
		setRandomTransforms([...newTransforms]);
		setTransformsRolled(true);
	}, [children]);
	/**
	 * Generate initial rotations + translations
	 */
	useEffect(() => {
		if (transforms.length > 0) {
			setTransformsRolled(true);
			setRandomTransforms([...transforms]);
		} else {
			explodeEffect();
		}
	}, [transforms, explodeEffect]);
	return (
		<div
			className={className}
			role="tooltip"
			onMouseEnter={onMouseOver}
			onMouseLeave={onMouseLeave}
		>
			{children.split("").map((char, index) => {
				const key = `char-${index}`;
				const transform =
					index < 0 || index >= randomTransforms.length
						? {
								rotation: 0,
								translateX: 0,
								translateY: 0,
							}
						: randomTransforms[index];
				const style = isMouseOver
					? {
							transform: `rotate(${transform.rotation}deg) translate(${transform.translateX}%, ${transform.translateY}%)`,
						}
					: {};
				return (
					<span
						key={key}
						className={"inline-block"}
						style={{
							...style,
							transition: "transform ease",
							transitionDuration: "250ms",
						}}
					>
						{char}
					</span>
				);
			})}
		</div>
	);
};

export default ExplosiveText;
