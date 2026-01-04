import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import HoverMarquee from "../../components/containers/HoverMarquee";
import Marquee from "../../components/containers/Marquee";
import PropTable from "../../components/tables/PropTable";
import { HoverMarqueeProps, MarqueeProps } from "../../utils/data";

/**
 * Demos the Marquee component with placeholder content
 */
const MarqueeDemo = () => {
    const PlaceholderContent=  ({ color }: { color: string}) => {
        return (
            <div 
                className="min-w-20 min-h-20 rounded-xl"
                style={{ 
                    backgroundColor: color,
                }}
            >
                Hi
            </div>
        );
    }
    const colors = [
        "#A3D5FF",
        "#FF6B6B",
        "#4ECDC4",
        "#C7F000",
        "#9B59B6",
        "#F39C12",
        "#1ABC9C",
        "#2C3E50",
        "#E84393",
        "#00B894",
        "#D63031",
        "#0984E3",
        "#6C5CE7",
        "#FD79A8",
        "#E17055",
        "#00CEC9",
        "#FAB1A0",
        "#636E72",
        "#55EFC4",
        "#B2BEC3"
    ];
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					Accordion
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Foldable Container that can be opened and closed through clicking on
					it.
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl flex flex-col gap-2">
						<DemoCard
							header="Horizontal"
							child={
								<div className="flex flex-col gap-2 overflow-hidden">
                                    <Marquee>
                                        {colors.map(color => {
                                            return (
                                                <PlaceholderContent color={color} key={color} />
                                            )
                                        })}
                                    </Marquee>
                                    <Marquee reverse>
                                        {colors.map(color => {
                                            return (
                                                <PlaceholderContent color={color} key={color} />
                                            )
                                        })}
                                    </Marquee>
                                </div>
							}
						/>
                        <DemoCard
							header="Vertical"
							child={
								<div className="flex flex-row gap-2 h-64 md:h-128">
                                    <Marquee direction="vertical">
                                        {colors.map(color => {
                                            return (
                                                <PlaceholderContent color={color} key={color} />
                                            )
                                        })}
                                    </Marquee>
                                    <Marquee direction="vertical" reverse>
                                        {colors.map(color => {
                                            return (
                                                <PlaceholderContent color={color} key={color} />
                                            )
                                        })}
                                    </Marquee>
                                </div>
							}
						/>
                        <DemoCard
							header="Fast Scrolling"
							child={
								<Marquee speed="fast">
                                    {colors.map(color => {
                                        return (
                                            <PlaceholderContent color={color} key={color} />
                                        )
                                    })}
                                </Marquee>
							}
						/>
                        <DemoCard
							header="Slow On Hover"
							child={
								<div className="overflow-hidden">
                                    <div className="flex flex-col gap-2">
                                        <HoverMarquee>
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                        <HoverMarquee reverse>
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                    </div>
                                    <div className="flex flex-row justify-center gap-2 h-64 md:h-128">
                                        <HoverMarquee direction="vertical">
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                        <HoverMarquee direction="vertical" reverse>
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                    </div>
                                </div>
							}
						/>
                        <DemoCard
							header="Stop On Hover"
							child={
								<div className="overflow-hidden">
                                    <div className="flex flex-col gap-2">
                                        <HoverMarquee onHoverSpeed="stop">
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                        <HoverMarquee reverse onHoverSpeed="stop">
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                    </div>
                                    <div className="flex flex-row justify-center gap-2 h-64 md:h-128">
                                        <HoverMarquee direction="vertical" onHoverSpeed="stop">
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                        <HoverMarquee direction="vertical" reverse onHoverSpeed="stop">
                                            {colors.map(color => {
                                                return (
                                                    <PlaceholderContent color={color} key={color} />
                                                )
                                            })}
                                        </HoverMarquee>
                                    </div>
                                </div>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<h2 className="text-center text-xl font-bold">Marquee Props</h2>
				<div className="flex justify-center">
					<PropTable rows={MarqueeProps} />
				</div>
				<div className="h-2 md:h-4" />
				<h2 className="text-center text-xl font-bold">HoverMarquee Props</h2>
				<div className="flex justify-center">
					<PropTable rows={HoverMarqueeProps} />
				</div>
			</div>
		</div>
	);
};

export default MarqueeDemo;
