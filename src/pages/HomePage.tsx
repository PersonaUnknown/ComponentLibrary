import { Fragment } from "react/jsx-runtime";
import ComponentCard from "../components/cards/ComponentCard";
import { ComponentList } from "../utils/data";

/**
 * Main page, compiling list of UI Components
 */
const HomePage = () => {
    return (
        <div className="min-h-screen p-4 manrope space-y-4">
            <h1 className="text-center text-4xl"> Component Library </h1>
            {ComponentList.map(component => {
                const { header, components } = component;
                return (
                    <section key={header} className="space-y-2">
                        <h2 className="text-2xl text-center font-semibold">
                            {header}
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-full md:w-3xl lg:w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                                {components.map(component => {
                                    const { label } = component;
                                    return (
                                        <div key={label}>
                                            <ComponentCard 
                                                data={component} 
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default HomePage;