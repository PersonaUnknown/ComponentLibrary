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
                description: "Have characters appear in a typed animation, resembling a typewriter."
            },
            {
                href: "text-random",
                label: "Text Randomizer",
                description: "Randomize text on-hover effect"
            },
            {
                href: "text-explode",
                label: "Scatter Text",
                description: "Scatter / Explode text on-hover effect"
            },
            {
                href: "text-path",
                label: "Text Along Path",
                description: "Have characters be able to follow along a non-linear path."
            },
            {
                href: "text-bounce",
                label: "Bouncy Text",
                description: "Have characters bounce / move in interesting ways."
            },
            {
                href: "text-rotate",
                label: "Word Rotate",
                description: "Vertically rotate between words as each word slides into frame from top to bottom."
            },
            {
                href: "text-highlight",
                label: "Text Highlight",
                description: "Text that gets highlighted when you hover it."
            },
        ]
    },
    {
        header: "Input",
        components: [
            {
                href: "ripple-button",
                label: "Ripple Button",
                description: "Button that creates a ripple effect when you press it."
            },
            {
                href: "interactive-hover-button",
                label: "Interactive Hover Button",
                description: "Button with on-hover effect that results in a dynamic transition / feedback for user."
            }
        ]
    },
    {
        header: "Container",
        components: [
            {
                href: "marquee",
                label: "Marquee (WIP)",
                description: "Infinitely scrolling container that displays any form of content (i.e. text, images, videos, etc.)."
            },
            {
                href: "mario-container",
                label: "Mario (WIP)",
                description: "Container meant to resemble some of the UI from Mario games (particularly Mario Wonder)."
            },
            {
                href: "carousel",
                label: "Carousel",
                description: "Container that displays one element at a time. Able to traverse the container using mouse / touch controls or button input."
            },
            {
                href: "condensed-container",
                label: "Condensed Container (WIP)",
                description: "Container that condenses equally sized content on top of each other. Hovering expands the list, revealing all content."
            },
            {
                href: "accordion",
                label: "Accordion",
                description: "Foldable Container that can be opened and closed through clicking on it."
            },
        ]
    },
    {
        header: "Other",
        components: [
            {
                href: "file-tree",
                label: "File Tree (WIP)",
                description: "Displays folder and file structure of a directory."
            },
        ]
    }
];
/**
 * Example Manual Transforms for ExplosiveText demo
 */
export const ManualExplosion: Transform[] = [
    {
        rotation: -8,
        translateX: -30,
        translateY: -20
    },
    {
        rotation: 4,
        translateX: -10,
        translateY: 10
    },
    {
        rotation: 6,
        translateX: 5,
        translateY: -10
    },
    {
        rotation: -8,
        translateX: 0,
        translateY: 8
    },
    {
        rotation: 5,
        translateX: 0,
        translateY: 10
    },
    {
        rotation: -5,
        translateX: 0,
        translateY: -15
    },
    {
        rotation: 10,
        translateX: 5,
        translateY: 7
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
        description: "Single string to animate"
    },
    {
        prop: "words",
        type: "string[]",
        default: "-",
        description: "Array of strings to animate in sequence"
    },
    {
        prop: "delay",
        type: "number",
        default: "150",
        description: "Duration for each character (ms)"
    },
    {
        prop: "pauseDelay",
        type: "number",
        default: "500",
        description: "Pause duration between typing words (ms)"
    },
    {
        prop: "onStart",
        type: "boolean",
        default: "true",
        description: "Start animation on initial render"
    },
    {
        prop: "loop",
        type: "boolean",
        default: "false",
        description: "Whether to loop the animation"
    },
    {
        prop: "showCursor",
        type: "boolean",
        default: "true",
        description: "Whether to show the cursor during animation"
    },
    {
        prop: "blinkCursor",
        type: "boolean",
        default: "true",
        description: "Whether to have the cursor blink or not"
    },
    {
        prop: "cursor",
        type: "\"line\" | \"underscore\"",
        default: "\"line\"",
        description: "Style cursor as | or _"
    }
];
export const RippleButtonProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Button Text"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Tailwind classes / styling"
    },
    {
        prop: "onClick",
        type: "() => void",
        default: "-",
        description: "Button logic"
    },
    {
        prop: "rippleColor",
        type: "string",
        default: "#ff0000",
        description: "Color of ripple"
    },
    {
        prop: "duration",
        type: "number",
        default: "500",
        description: "Ripple animation duration / lifetime (ms)"
    },
];
export const TextRandomizerProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Input string to animate"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Tailwind classes / styling"
    },
    {
        prop: "delay",
        type: "number",
        default: "30",
        description: "Pause delay between randomized iterations"
    },
    {
        prop: "iterationOffset",
        type: "number",
        default: "1",
        description: "Amount to offset iterations to adjust how the animation is displayed"
    },
];
export const ExplosiveTextProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Input string to animate"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Tailwind classes / styling"
    },
    {
        prop: "alwaysRandom",
        type: "boolean",
        default: "false",
        description: "If the on hover effect should be different on every hover event"
    },
    {
        prop: "transforms",
        type: "Transform[]",
        default: "-",
        description: "If the user wants to create their own manual explosion"
    },
];
export const BouncyTextProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Input text"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional styling"
    },
    {
        prop: "animType",
        type: "\"y\" | \"scale\" | \"move-scale\"",
        default: "\"y\"",
        description: "Type of animation to play"
    },
    {
        prop: "delay",
        type: "number",
        default: "0.2",
        description: "Delay between animating characters"
    }
];
export const TextPathProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Input text"
    },
    {
        prop: "path",
        type: "string",
        default: "-",
        description: "SVG Path definition"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional styling"
    },
    {
        prop: "fill",
        type: "string",
        default: "none",
        description: "Custom <path> fill"
    },
    {
        prop: "startOffset",
        type: "string",
        default: "0%",
        description: "Starting offset of <textPath>"
    },
    {
        prop: "strokeColor",
        type: "string",
        default: "-",
        description: "Custom Path Color"
    },
    {
        prop: "strokeWidth",
        type: "number",
        default: "1",
        description: "Custom Path stroke width"
    },
    {
        prop: "viewBox",
        type: "string",
        default: "-",
        description: "Custom SVG Viewbox"
    }
];
export const TextRotateProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Button Text"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
    {
        prop: "duration",
        type: "number",
        default: "2500",
        description: "Animation Duration (ms)"
    },
];
export const AccordionProps: PropTableRow[] = [
    {
        prop: "header",
        type: "string",
        default: "-",
        description: "Label text for button that toggles accordion content"
    },
    {
        prop: "content",
        type: "string",
        default: "-",
        description: "Accordion content that gets shown or hidden"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
];
export const TextHighlightProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Input text string"
    },
    {
        prop: "highlightColor",
        type: "string",
        default: "#ff0000",
        description: "Highlight color"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
    {
        prop: "duration",
        type: "number",
        default: "300",
        description: "How long it takes to fully highlight text (ms)"
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
        description: "Button Text"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
    {
        prop: "onClick",
        type: "() => void",
        default: "-",
        description: "Button Logic"
    }
];
export const BasicProps: PropTableRow[] = [
    {
        prop: "children",
        type: "string",
        default: "-",
        description: "Button Text"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
];
export const BasicContainerProps: PropTableRow[] = [
    {
        prop: "children",
        type: "ReactNode[]",
        default: "-",
        description: "Input elements to put inside container"
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Optional Styling"
    },
];
