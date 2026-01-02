interface Props {
    children: React.ReactNode[];
    direction: "horizontal" | "vertical"; // The direction the content will flow
    speed: number; // How fast the marquee moves / content travels
    reverse: boolean; // Whether to reverse the flow of the content (ex: reversing horizontal flow makes content go to the left instead of right)
    fadeGradient: boolean; // Whether to display the edges of the marquee as foggy / faded sections
}

/**
 * Infinitely scrolling content container
 */
// https://www.youtube.com/watch?v=iLmBy-HKIAw
const Marquee = ({
    children
}: Props) => {
    return (
        <div>
            <div>

            </div>
        </div>
    );
}

export default Marquee;