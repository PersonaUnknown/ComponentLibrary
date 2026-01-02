import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import PropTable from "../../components/tables/PropTable";
import TextRotate from "../../components/text/TextRotate";
import { TextRotateProps } from "../../utils/data";

/**
 * Demo Showcase of creating Text Rotate component
 */
const TextRotateDemo = () => {
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
                                <TextRotate 
                                    words={[
                                        "Hello",
                                        "World",
                                        ":)"
                                    ]}
                                />
                            }
                        />
                        <DemoCard 
                            header="Custom Duration"
                            child={
                                <TextRotate 
                                    words={[
                                        "Hello",
                                        "World",
                                        ":)"
                                    ]}
                                    duration={1500}
                                />
                            }
                        />
                        <DemoCard 
                            header="Custom Styling"
                            child={
                                <TextRotate 
                                    words={[
                                        "Hello",
                                        "World",
                                        ":)"
                                    ]}
                                    className="space-mono text-xl font-bold"
                                />
                            }
                        />
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={TextRotateProps} />
                </div>
            </div>
        </div>
    );
}

export default TextRotateDemo;
