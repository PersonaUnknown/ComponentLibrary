import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import PropTable from "../../components/tables/PropTable";
import TextHighlight from "../../components/text/TextHighlight";
import { TextHighlightProps } from "../../utils/data";

/**
 * Demo Showcase of creating Text Highlight component
 */
const TextHighlightDemo = () => {
    return (
        <div>
            <div className="min-h-screen p-4 md:p-6 manrope">
                <BackButton />
                <h1 className="text-center text-2xl sm:text-3xl font-bold">
                    Text Rotate
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    Component that rotates through multiple words one at a time.
                </h2>
                <div className="h-2 md:h-4" />
                <main className="flex justify-center">
                    <div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        <DemoCard 
                            header="Base Usage"
                            child={
                                <TextHighlight>
                                    Hello World
                                </TextHighlight>
                            }
                        />
                        <DemoCard 
                            header="Custom Highlight"
                            child={
                                <TextHighlight highlightColor="#00ff00">
                                    Hello World
                                </TextHighlight>
                            }
                        />
                        <DemoCard 
                            header="Custom Duration"
                            child={
                                <TextHighlight duration={600}>
                                    Hello World
                                </TextHighlight>
                            }
                        />
                        <DemoCard 
                            header="Custom Styling"
                            child={
                                <TextHighlight
                                    className="space-mono font-bold text-xl p-2 cursor-pointer"
                                >
                                    Hello World
                                </TextHighlight>
                            }
                        />
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={TextHighlightProps} />
                </div>
            </div>
        </div>
    );
}

export default TextHighlightDemo;
