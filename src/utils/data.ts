import type { ComponentSection, PropTableRow } from "./types";

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
                href: "text-path",
                label: "Text Along Path",
                description: "Have characters be able to follow along a non-linear path."
            },
            {
                href: "text-anim",
                label: "Animated Text",
                description: "Various text animations."
            },
        ]
    },
    {
        header: "Input",
        components: [

        ]
    }
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
