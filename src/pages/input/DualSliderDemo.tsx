import { useState } from "react";
import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import PropTable from "../../components/tables/PropTable";
import DualSlider from "../../components/ui/DualSlider";
import { DualSliderProps } from "../../utils/data";

/**
 * Demo showcase of DualSlider component using different ranges / contexts
 */
const DualSliderDemo = () => {
    const [range, setRange] = useState({ min: 0, max: 100 });
	const [range2, setRange2] = useState({ min: 0, max: 100 });
	const [priceRange, setPriceRange] = useState({ min: 50, max: 500 });
	const [ageRange, setAgeRange] = useState({ min: 18, max: 65 });
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					Ripple Button
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Button that creates a ripple effect when you press it
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Without Labels"
							child={
								<DualSlider
                                    min={0}
                                    max={100}
                                    step={1}
                                    defaultLow={range.min}
                                    defaultHigh={range.max}
                                    onChange={(low, high) => setRange({ min: low, max: high })}
                                    formatLabel={(value) => `${value} years`}
                                    trackClassName="bg-gray-500"
                                    rangeClassName="bg-red-500"
                                    thumbClassName="border-black focus:ring-black"
                                    showLabels={false}
                                />
							}
						/>
                        <DemoCard
							header="No Label Formatting"
							child={
								<DualSlider
                                    min={0}
                                    max={100}
                                    step={1}
                                    defaultLow={range2.min}
                                    defaultHigh={range2.max}
                                    onChange={(low, high) => setRange2({ min: low, max: high })}
                                    trackClassName="bg-gray-500"
                                    rangeClassName="bg-red-500"
                                    thumbClassName="border-black h-6 w-6 focus:ring-black"
                                />
							}
						/>
                        <DemoCard
							header="Price Range Filter"
							child={
								<div className="flex flex-col gap-1">
                                    <DualSlider
                                        min={0}
                                        max={1000}
                                        step={10}
                                        defaultLow={priceRange.min}
                                        defaultHigh={priceRange.max}
                                        onChange={(low, high) => setPriceRange({ min: low, max: high })}
                                        formatLabel={(value) => `$${value}`}
                                        rangeClassName="bg-emerald-500"
                                        thumbClassName="border-emerald-500 focus:ring-emerald-500"
                                    />
                                    <p className="mt-2 text-sm text-gray-600">
                                        Selected price: ${priceRange.min} - ${priceRange.max}
                                    </p>
                                </div>
							}
						/>
                        <DemoCard
							header="Age Range Filter"
							child={
								<div className="flex flex-col gap-1">
                                    <DualSlider
                                        min={0}
                                        max={100}
                                        step={1}
                                        defaultLow={ageRange.min}
                                        defaultHigh={ageRange.max}
                                        onChange={(low, high) => setAgeRange({ min: low, max: high })}
                                        formatLabel={(value) => `${value} years`}
                                        rangeClassName="bg-purple-500"
                                        thumbClassName="border-purple-500 focus:ring-purple-500"
                                    />
                                    <p className="mt-2 text-sm text-gray-600">
                                        Selected age: {ageRange.min} - {ageRange.max} years
                                    </p>
                                </div>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={DualSliderProps} />
				</div>
			</div>
		</div>
	);
};

export default DualSliderDemo;
