import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import Accordion from "../../components/containers/Accordion";
import PropTable from "../../components/tables/PropTable";
import { AccordionProps } from "../../utils/data";

const AccordionDemo = () => {
    return (
        <div>
            <div className="min-h-screen p-4 md:p-6 manrope">
                <BackButton />
                <h1 className="text-center text-2xl sm:text-3xl font-bold">
                    Accordion
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    Foldable Container that can be opened and closed through clicking on it.
                </h2>
                <div className="h-2 md:h-4" />
                <main className="flex justify-center">
                    <div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        <DemoCard 
                            header="Base Usage"
                            child={
                                <Accordion 
                                    header={"Hello World"}
                                    content={"This is example text."}
                                />
                            }
                        />
                        <DemoCard 
                            header="Custom Styling"
                            child={
                                <Accordion 
                                    header={"Hello World"}
                                    content={"This is example text."}
                                    className="border-2 border-black text-bold space-mono p-4 rounded-xl"
                                />
                            }
                        />
                    </div>
                </main>
                <div className="h-2 md:h-4" />
                <div className="flex justify-center">
                    <PropTable rows={AccordionProps} />
                </div>
            </div>
        </div>
    );
}

export default AccordionDemo;