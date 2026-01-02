import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import Modal from "../../components/containers/Modal";
import PropTable from "../../components/tables/PropTable";
import { ModalProps } from "../../utils/data";
import type { ModalRef } from "../../utils/refs";

// Showcase of Modal component and its different configurations using placeholder content
const ModalDemo = () => {
	const modalRef = useRef<ModalRef>(null);
	const closeModal = () => {
		modalRef?.current?.onHide();
	};
	const PlaceholderContent = () => {
		return (
			<button
                type="button"
				className="flex flex-col bg-white rounded-xl w-72 md:w-96 m-0 p-4 text-center space-y-1"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type="button"
					onClick={closeModal}
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
					Modal
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Foldable Container that can be opened and closed through clicking on
					it.
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Top Left"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="top-left"
                                />
							}
						/>
                        <DemoCard
							header="Top Center"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="top-center"
                                />
							}
						/>
                        <DemoCard
							header="Top Right"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="top-right"
                                />
							}
						/>
                        <DemoCard
							header="Center Left"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="center-left"
                                />
							}
						/>
                        <DemoCard
							header="Center"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="center"
                                />
							}
						/>
                        <DemoCard
							header="Center Right"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="center-right"
                                />
							}
						/>
                        <DemoCard
							header="Bottom Left"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="bottom-left"
                                />
							}
						/>
                        <DemoCard
							header="Bottom Center"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="bottom-center"
                                />
							}
						/>
                        <DemoCard
							header="Bottom Right"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="bottom-right"
                                />
							}
						/>
                        <DemoCard
							header="No Backdrop"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="center"
                                    backdrop={false}
                                />
							}
						/>
                        <DemoCard
							header="Static Modal"
							child={
								<Modal
                                    ref={modalRef}
                                    buttonContent={
                                        <div className="mx-auto bg-[#505081] hover:bg-[#0F0E47] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl">
                                            Press Here
                                        </div>
                                    }
                                    content={<PlaceholderContent />}
                                    position="center"
                                    backdrop={true}
                                    staticModal={true}
                                />
							}
						/>
                    </div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={ModalProps} />
				</div>
			</div>
		</div>
	);
};

export default ModalDemo;
