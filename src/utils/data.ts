import type { ComponentSection, PropTableRow, Transform } from "./types";

/**
 * Home Page Links
 */
export const ComponentList: ComponentSection[] = [
	{
		header: "Text Effects",
		components: [
			{
				href: "typewriter",
				label: "Typewriter",
				description:
					"Have characters appear in a typed animation, resembling a typewriter.",
			},
			{
				href: "text-random",
				label: "Text Randomizer",
				description: "Randomize text on-hover effect",
			},
			{
				href: "text-explode",
				label: "Scatter Text",
				description: "Scatter / Explode text on-hover effect",
			},
			{
				href: "text-path",
				label: "Text Along Path",
				description:
					"Have characters be able to follow along a non-linear path.",
			},
			{
				href: "text-bounce",
				label: "Bouncy Text",
				description: "Have characters bounce / move in interesting ways.",
			},
			{
				href: "text-rotate",
				label: "Word Rotate",
				description:
					"Vertically rotate between words as each word slides into frame from top to bottom.",
			},
			{
				href: "text-highlight",
				label: "Text Highlight",
				description: "Text that gets highlighted when you hover it.",
			},
			{
				href: "text-tooltip",
				label: "Tooltip (WIP)",
				description:
					"Tooltip information that displays when hovering over text.",
			},
		],
	},
	{
		header: "Input",
		components: [
			{
				href: "ripple-button",
				label: "Ripple Button",
				description: "Button that creates a ripple effect when you press it.",
			},
			{
				href: "interactive-hover-button",
				label: "Interactive Hover Button",
				description:
					"Button with on-hover effect that results in a dynamic transition / feedback for user.",
			},
			{
				href: "dual-slider",
				label: "Dual Slider",
				description:
					"Slider component where user controls min and max ranges through two knobs.",
			},
		],
	},
	{
		header: "Container",
		components: [
			{
				href: "marquee",
				label: "Marquee (In Progress)",
				description:
					"Infinitely scrolling container that displays any form of content (i.e. text, images, videos, etc.).",
			},
			{
				href: "mario-container",
				label: "Mario (WIP)",
				description:
					"Container meant to resemble some of the UI from Mario games (particularly Mario Wonder).",
			},
			{
				href: "carousel",
				label: "Carousel",
				description:
					"Container that displays one element at a time. Able to traverse the container using mouse / touch controls or button input.",
			},
			{
				href: "condensed-container",
				label: "Condensed Container (In Progress)",
				description:
					"Container that condenses equally sized content on top of each other. Hovering expands the list, revealing all content.",
			},
			{
				href: "accordion",
				label: "Accordion",
				description:
					"Foldable Container that can be opened and closed through clicking on it.",
			},
			{
				href: "modal",
				label: "Modal",
				description: "Modal popup that displays over main content of page.",
			},
		],
	},
	{
		header: "Other",
		components: [
			{
				href: "file-tree",
				label: "File Tree",
				description: "Displays folder and file structure of a directory.",
			},
			{
				href: "video-player",
				label: "Custom Video Player (WIP)",
				description: "Video player that does not use default controls UI.",
			},
		],
	},
];
/**
 * Example Manual Transforms for ExplosiveText demo
 */
export const ManualExplosion: Transform[] = [
	{
		rotation: -8,
		translateX: -30,
		translateY: -20,
	},
	{
		rotation: 4,
		translateX: -10,
		translateY: 10,
	},
	{
		rotation: 6,
		translateX: 5,
		translateY: -10,
	},
	{
		rotation: -8,
		translateX: 0,
		translateY: 8,
	},
	{
		rotation: 5,
		translateX: 0,
		translateY: 10,
	},
	{
		rotation: -5,
		translateX: 0,
		translateY: -15,
	},
	{
		rotation: 10,
		translateX: 5,
		translateY: 7,
	},
];
/**
 * Component Props (for PropTable component)
 */
export const TypewriterProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Single string to animate",
	},
	{
		prop: "words",
		type: "string[]",
		default: "-",
		description: "Array of strings to animate in sequence",
	},
	{
		prop: "delay",
		type: "number",
		default: "150",
		description: "Duration for each character (ms)",
	},
	{
		prop: "pauseDelay",
		type: "number",
		default: "500",
		description: "Pause duration between typing words (ms)",
	},
	{
		prop: "onStart",
		type: "boolean",
		default: "true",
		description: "Start animation on initial render",
	},
	{
		prop: "loop",
		type: "boolean",
		default: "false",
		description: "Whether to loop the animation",
	},
	{
		prop: "showCursor",
		type: "boolean",
		default: "true",
		description: "Whether to show the cursor during animation",
	},
	{
		prop: "blinkCursor",
		type: "boolean",
		default: "true",
		description: "Whether to have the cursor blink or not",
	},
	{
		prop: "cursor",
		type: '"line" | "underscore"',
		default: '"line"',
		description: "Style cursor as | or _",
	},
];
export const RippleButtonProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Button Text",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Tailwind classes / styling",
	},
	{
		prop: "onClick",
		type: "() => void",
		default: "-",
		description: "Button logic",
	},
	{
		prop: "rippleColor",
		type: "string",
		default: "#ff0000",
		description: "Color of ripple",
	},
	{
		prop: "duration",
		type: "number",
		default: "500",
		description: "Ripple animation duration / lifetime (ms)",
	},
];
export const TextRandomizerProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Input string to animate",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Tailwind classes / styling",
	},
	{
		prop: "delay",
		type: "number",
		default: "30",
		description: "Pause delay between randomized iterations",
	},
	{
		prop: "iterationOffset",
		type: "number",
		default: "1",
		description:
			"Amount to offset iterations to adjust how the animation is displayed",
	},
];
export const ExplosiveTextProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Input string to animate",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Tailwind classes / styling",
	},
	{
		prop: "alwaysRandom",
		type: "boolean",
		default: "false",
		description:
			"If the on hover effect should be different on every hover event",
	},
	{
		prop: "transforms",
		type: "Transform[]",
		default: "-",
		description: "If the user wants to create their own manual explosion",
	},
];
export const BouncyTextProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Input text",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional styling",
	},
	{
		prop: "animType",
		type: '"y" | "scale" | "move-scale"',
		default: '"y"',
		description: "Type of animation to play",
	},
	{
		prop: "delay",
		type: "number",
		default: "0.2",
		description: "Delay between animating characters",
	},
];
export const TextPathProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Input text",
	},
	{
		prop: "path",
		type: "string",
		default: "-",
		description: "SVG Path definition",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional styling",
	},
	{
		prop: "fill",
		type: "string",
		default: "none",
		description: "Custom <path> fill",
	},
	{
		prop: "startOffset",
		type: "string",
		default: "0%",
		description: "Starting offset of <textPath>",
	},
	{
		prop: "strokeColor",
		type: "string",
		default: "-",
		description: "Custom Path Color",
	},
	{
		prop: "strokeWidth",
		type: "number",
		default: "1",
		description: "Custom Path stroke width",
	},
	{
		prop: "viewBox",
		type: "string",
		default: "-",
		description: "Custom SVG Viewbox",
	},
];
export const TextRotateProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Button Text",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
	{
		prop: "duration",
		type: "number",
		default: "2500",
		description: "Animation Duration (ms)",
	},
];
export const AccordionProps: PropTableRow[] = [
	{
		prop: "header",
		type: "string",
		default: "-",
		description: "Label text for button that toggles accordion content",
	},
	{
		prop: "content",
		type: "string",
		default: "-",
		description: "Accordion content that gets shown or hidden",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
];
export const TextHighlightProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Input text string",
	},
	{
		prop: "highlightColor",
		type: "string",
		default: "#ff0000",
		description: "Highlight color",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
	{
		prop: "duration",
		type: "number",
		default: "300",
		description: "How long it takes to fully highlight text (ms)",
	},
];
export const FolderProps: PropTableRow[] = [
	{
		prop: "value",
		type: "string",
		default: "-",
		description: "Folder / Directory name",
	},
	{
		prop: "children",
		type: "ReactNode | ReactNode[]",
		default: "-",
		description: "Input elements to put inside Folder",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
	{
		prop: "closedIcon",
		type: "ReactNode",
		default: "-",
		description:
			"Optional Component to render instead of default closed folder icon",
	},
	{
		prop: "openIcon",
		type: "ReactNode",
		default: "-",
		description:
			"Optional Component to render instead of default open folder icon",
	},
];
export const FileProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "File name",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
	{
		prop: "fileIcon",
		type: "ReactNode",
		default: "-",
		description: "Optional Component to render instead of default file icon",
	},
];
export const ModalProps: PropTableRow[] = [
	{
		prop: "buttonContent",
		type: "ReactNode",
		default: "-",
		description: "Component that acts as a button to show modal",
	},
	{
		prop: "content",
		type: "ReactNode",
		default: "-",
		description: "Component that gets displayed as the modal",
	},
	{
		prop: "position",
		type: "\"top-left\" | \"top-center\" | \"top-right\" | \"center-left\" | \"center\" | \"center-right\" | \"bottom-left\" | \"bottom-center\" | \"bottom-right\"",
		default: "",
		description: "Where to align the content based on anchor point positioning",
	},
	{
		prop: "backdrop",
		type: "boolean",
		default: "true",
		description: "Have dark backdrop cover the screen behind modal",
	},
	{
		prop: "staticModal",
		type: "boolean",
		default: "false",
		description: "Whether to close the modal if you click outside of the modal",
	},
];

export const DualSliderProps: PropTableRow[] = [
	{
		prop: "min",
		type: "number",
		default: "-",
		description: "Minimum value of slider",
	},
	{
		prop: "max",
		type: "number",
		default: "-",
		description: "Maximum value of slider",
	},
	{
		prop: "step",
		type: "number",
		default: "1",
		description: "Step Value in-between slider",
	},
	{
		prop: "defaultLow",
		type: "number",
		default: "min",
		description: "Set default minimum range",
	},
	{
		prop: "defaultHigh",
		type: "number",
		default: "max",
		description: "Set default maximum range",
	},
	{
		prop: "onChange",
		type: "() => void",
		default: "-",
		description: "Updates current low and high values of slider to useState hook",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Custom styling for container",
	},
	{
		prop: "trackClassName",
		type: "string",
		default: "-",
		description: "Stylize the slider track",
	},
	{
		prop: "rangeClassName",
		type: "string",
		default: "-",
		description: "Stylize the area between both thumbs, ideal for setting color",
	},
	{
		prop: "thumbClassName",
		type: "string",
		default: "-",
		description: "Stylize circular thumb",
	},
	{
		prop: "labelClassName",
		type: "string",
		default: "-",
		description: "Stylize optional labels",
	},
	{
		prop: "showLabels",
		type: "boolean",
		default: "true",
		description: "Set labels to be visible",
	},
	{
		prop: "formatLabel",
		type: "(value: number) => string",
		default: "true",
		description: "How you want the labels to be formatted ($, %, etc.)",
	},
];
/**
 * Basic Component Props
 */
export const ButtonProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Button Text",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
	{
		prop: "onClick",
		type: "() => void",
		default: "-",
		description: "Button Logic",
	},
];
export const BasicProps: PropTableRow[] = [
	{
		prop: "children",
		type: "string",
		default: "-",
		description: "Button Text",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
];
export const BasicContainerProps: PropTableRow[] = [
	{
		prop: "children",
		type: "ReactNode | ReactNode[]",
		default: "-",
		description: "Input elements to put inside container",
	},
	{
		prop: "className",
		type: "string",
		default: "-",
		description: "Optional Styling",
	},
];
