import BackButton from "../components/buttons/BackButton";
import PropTable from "../components/tables/PropTable";
import ExplosiveText from "../components/text/ExplosiveText";
import TextRandomizer from "../components/text/TextRandomizer";
import { ExplosiveTextProps, ManualExplosion, TextRandomizerProps } from "../utils/data";

/**
 * Text Randomizer Demo Showcase
 */
const TextRandomizerDemo = () => {
    return (
        <div>
            <div className="min-h-screen p-4 md:p-6 manrope">
                <BackButton />
                <h1 className="text-center text-2xl sm:text-3xl font-bold">
                    Text Randomizer
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    When hovering over text, randomize its characters for a set duration.
                </h2>
                <div className="h-2 md:h-4" />
                <main className="flex justify-center">
                    <div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        <DemoCard 
                            header="Base Usage"
                            child={
                                <TextRandomizer>
                                    HELLO WORLD
                                </TextRandomizer>
                            }
                        />
                        <DemoCard 
                            header="Custom Delay"
                            child={
                                <TextRandomizer delay={60}>
                                    HELLO WORLD
                                </TextRandomizer>
                            }
                        />
                        <DemoCard 
                            header="Custom Duration"
                            child={
                                <TextRandomizer iterationOffset={1 / 3}>
                                    HELLO WORLD
                                </TextRandomizer>
                            }
                        />
                        <DemoCard 
                            header="Custom Text"
                            child={
                                <TextRandomizer className="text-2xl space-mono font-extrabold">
                                    HELLO WORLD
                                </TextRandomizer>
                            }
                        />
                        {/* Example based on the menu from https://kprverse.com */}
                        <DemoCard 
                            header="Randomizer Application"
                            child={
                                <div className="flex flex-col gap-4">
                                    <TextRandomizer
                                        className="space-mono cursor-pointer text-2xl font-extrabold bg-black text-white hover:bg-blue-400 hover:text-black p-2 clip-bottom-right-tri"
                                    >
                                        PAGE ONE
                                    </TextRandomizer>
                                    <TextRandomizer
                                        className="space-mono cursor-pointer text-2xl font-extrabold bg-black text-white hover:bg-blue-400 hover:text-black p-2 clip-bottom-right-tri"
                                    >
                                        PAGE TWO
                                    </TextRandomizer>
                                    <TextRandomizer
                                        className="space-mono cursor-pointer text-2xl font-extrabold bg-black text-white hover:bg-blue-400 hover:text-black p-2 clip-bottom-right-tri"
                                    >
                                        PAGE THREE
                                    </TextRandomizer>
                                </div>
                            }
                        />
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={TextRandomizerProps} />
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

export default TextRandomizerDemo;