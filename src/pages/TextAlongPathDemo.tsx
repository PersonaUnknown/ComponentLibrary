import { useRef } from "react";
import BackButton from "../components/buttons/BackButton";
import PropTable from "../components/tables/PropTable";
import TextAlongPath from "../components/text/TextAlongPath";
import { TextPathProps } from "../utils/data";
import type { TextAlongPathRef } from "../utils/refs";

/**
 * Animating Text Along Non-Linear Path Demo Showcase.
 * Curve / Path used is from: https://www.youtube.com/watch?v=UxiLC9XFvuM
 */
const TextAlongPathDemo = () => {
    const animRef = useRef<TextAlongPathRef>(null);
    return (
        <div>
            <div className="min-h-screen p-4 md:p-6 manrope">
                <BackButton />
                <h1 className="text-center text-2xl sm:text-3xl font-bold">
                    Text Along Path
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    Have text be displayed along a non-linear path
                </h2>
                <div className="h-2 md:h-4" />
                <main className="flex justify-center">
                    <div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        <DemoCard 
                            header="Text Along Curve"
                            child={
                                <TextAlongPath path="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </TextAlongPath>
                            }
                        />
                        <DemoCard 
                            header="Path Styling"
                            child={
                                <TextAlongPath strokeColor="red" fill="black" strokeWidth={2} path="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </TextAlongPath>
                            }
                        />
                        <DemoCard 
                            header="Text Offset"
                            child={
                                <TextAlongPath startOffset="50%" path="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </TextAlongPath>
                            }
                        />
                        <DemoCard 
                            header="Animate Along Path"
                            child={
                                <div className="overflow-hidden">
                                    <TextAlongPath 
                                        startOffset="0%" 
                                        path="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
                                        ref={animRef}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </TextAlongPath>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                                        <button 
                                            className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer"
                                            onClick={() => {
                                                animRef?.current?.play();
                                            }}
                                        >
                                            Play
                                        </button>
                                        <button                                             
                                            className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer"
                                            onClick={() => {
                                                animRef?.current?.pause();
                                            }}>
                                            Pause
                                        </button>
                                        <button 
                                            className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer"
                                            onClick={() => {
                                                animRef?.current?.rewind();
                                            }}
                                        >
                                            Rewind
                                        </button>
                                        <button
                                            className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer"
                                            onClick={() => {
                                                animRef?.current?.reset();
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={TextPathProps} />
                </div>
            </div>
        </div>
    );
}

/**
 * Component for grouping Typewriter component configuration w/ appropriate refresh button
 */
interface Props {
    header: string;
    child: React.ReactNode;
}
const DemoCard = ({
    header,
    child
}: Props) => {
    return (
        <div className="h-full">
            <h2 className="text-base lg:text-lg font-semibold">
                {header}
            </h2>
            <div className="relative flex justify-center item-center border-2 border-[#e6e6e6] rounded-xl px-3 py-5 md:p-6">
                {child}
            </div>
        </div>
    );
}

export default TextAlongPathDemo;