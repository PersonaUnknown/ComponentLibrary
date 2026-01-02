import { useRef } from "react";
import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import Carousel from "../../components/containers/Carousel";
import PropTable from "../../components/tables/PropTable";
import { BasicContainerProps } from "../../utils/data";
import type { CarouselRef } from "../../utils/refs";

/**
 * Demos the Carousel component with example card component
 */
const CarouselDemo = () => {
    const words = [
        "Hello",
        "World",
        "Final Page :)"
    ];
    const carouselRef = useRef<CarouselRef>(null);
    return (
        <div>
            <div className="min-h-screen p-4 md:p-6 manrope">
                <BackButton />
                <h1 className="text-center text-2xl sm:text-3xl font-bold">
                    Carousel
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    Displays content one at a time. Can traverse with mouse / touch controls or button input. Dragging snaps carousel to the nearest carousel content.
                </h2>
                <div className="h-2 md:h-4" />
                <main className="flex flex-col">
                    <div className="w-full md:w-3xl lg:w-5xl mx-auto">
                        <DemoCard 
                            header="Base Usage"
                            child={
                                <Carousel>
                                    {words.map(word => {
                                        return (
                                            <ExampleCard key={word}>
                                                {word}
                                            </ExampleCard>
                                        )
                                    })}
                                </Carousel>
                            }
                        />
                        <DemoCard 
                            header="Custom Styling"
                            child={
                                <Carousel
                                    className="w-72 bg-red-500 border-0 rounded-2xl space-mono"
                                >
                                    {words.map(word => {
                                        return (
                                            <ExampleCard key={word}>
                                                {word}
                                            </ExampleCard>
                                        )
                                    })}
                                </Carousel>
                            }
                        />
                        <div className="flex flex-col">
                            <h2 className="text-base lg:text-lg font-semibold">
                                Manual Scrolling
                            </h2>
                            <div className="border-2 border-[#e6e6e6] rounded-xl px-3 py-5 md:p-6 flex flex-col gap-4">
                                <Carousel ref={carouselRef}>
                                    {words.map(word => {
                                        return (
                                            <ExampleCard key={word}>
                                                {word}
                                            </ExampleCard>
                                        )
                                    })}
                                </Carousel>
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer rounded-full px-4"
                                        onClick={() => {carouselRef?.current?.scrollLeft();}}
                                    >
                                        Left
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-sky-300 hover:bg-sky-400 p-1 cursor-pointer rounded-full px-4"
                                        onClick={() => {carouselRef?.current?.scrollRight();}}
                                    >
                                        Right
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={BasicContainerProps} />
                </div>
            </div>
        </div>
    );
}

interface Props {
    children: string;
}

const ExampleCard = ({
    children,
}: Props) => {
    return (
        <div className={"feature-row w-full p-8 shrink-0 border border-[#e6e6e6]"}>
            <div>
                <h3 className="hidden md:block md:text-2xl lg:text-4xl xl:text-5xl text-[#333347] font-bold mb-6">
                    {children}
                </h3>
                <p className="text-xs sm:text-sm md:text-lg lg:text-2xl 2xl:text-3xl text-[#666680]">Insert Text Here</p>
            </div>
        </div>
    )
}

export default CarouselDemo;