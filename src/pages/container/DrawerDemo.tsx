import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import Drawer from "../../components/containers/Drawer";
import PropTable from "../../components/tables/PropTable";
import { DrawerProps } from "../../utils/data";
import type { DrawerRef } from "../../utils/refs";

/**
 * Demo Drawer component with placeholder content
 */
const DrawerDemo = () => {
    const drawerRef = useRef<DrawerRef>(null);
    const PlaceholderContent = () => {
        return (
            <button
                type="button"
                className="flex flex-col bg-white m-0 p-4 w-full h-full text-center space-y-1"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={() => drawerRef?.current?.onHide()}
                    className="cursor-pointer ml-auto z-10"
                >
                    <IoClose size={30} />
                </button>
                <h2 className="font-bold text-3xl text-center">Header</h2>
                <div className="w-full h-0.5 bg-black" />
                <div className="text-left">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </button>
        );
    };
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
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Top"
							child={
								<Drawer
                                    ref={drawerRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    side="top"
                                />
							}
						/>
                        <DemoCard
							header="Down"
							child={
								<Drawer
                                    ref={drawerRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    side="bottom"
                                />
							}
						/>
                        <DemoCard
							header="Left"
							child={
								<Drawer
                                    ref={drawerRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    side="left"
                                />
							}
						/>
                        <DemoCard
							header="Right"
							child={
								<Drawer
                                    ref={drawerRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    side="right"
                                />
							}
						/>
                        <DemoCard
							header="Static Drawer"
							child={
								<Drawer
                                    ref={drawerRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    staticModal
                                />
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={DrawerProps} />
				</div>
			</div>
		</div>
	);
};

export default DrawerDemo;
