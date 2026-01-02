import { Fragment } from "react";
import {
	FaFile,
	FaFileAlt,
	FaFileAudio,
	FaFileCode,
	FaFilePdf,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import AltFolder from "../../components/containers/fileTree/AltFolder";
import File from "../../components/containers/fileTree/File";
import FileTree from "../../components/containers/fileTree/FileTree";
import Folder from "../../components/containers/fileTree/Folder";
import PropTable from "../../components/tables/PropTable";
import { BasicContainerProps, FileProps, FolderProps } from "../../utils/data";

/**
 * Demos FileTree, Folder, and File components compiled into a File Tree Structure that matches the one from: https://magicui.design/docs/components/file-tree
 */
const FileTreeDemo = () => {
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					File Tree
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Showcase folder and file structure of a directory w/ foldable
					containers
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl flex flex-col gap-1">
						<DemoCard
							header="Base Usage"
							child={
								<FileTree>
									<Folder value="app">
										<File> layout.tsx </File>
										<File> page.tsx </File>
									</Folder>
									<Folder value="components">
										<Folder value="ui">
											<File> button.tsx </File>
										</Folder>
										<File> header.tsx </File>
										<File> footer.tsx </File>
									</Folder>
									<Folder value="lib">
										<File> utils.ts </File>
									</Folder>
									<File> README.md </File>
								</FileTree>
							}
						/>
						<DemoCard
							header="No Animations"
							child={
								<FileTree>
									<AltFolder value="app">
										<File> layout.tsx </File>
										<File> page.tsx </File>
									</AltFolder>
									<AltFolder value="components">
										<AltFolder value="ui">
											<File> button.tsx </File>
										</AltFolder>
										<File> header.tsx </File>
										<File> footer.tsx </File>
									</AltFolder>
									<AltFolder value="lib">
										<File> utils.ts </File>
									</AltFolder>
									<File> README.md </File>
								</FileTree>
							}
						/>
						<DemoCard
							header="Custom Style"
							child={
								<FileTree className="space-mono text-xl bg-gray-400 border-0 rounded-none">
									<Folder value="app">
										<File> layout.tsx </File>
										<File> page.tsx </File>
									</Folder>
									<Folder value="components">
										<Folder value="ui">
											<File> button.tsx </File>
										</Folder>
										<File> header.tsx </File>
										<File> footer.tsx </File>
									</Folder>
									<Folder value="lib">
										<File> utils.ts </File>
									</Folder>
									<File> README.md </File>
								</FileTree>
							}
						/>
						<DemoCard
							header="Custom Icons"
							child={
								<FileTree>
									<CustomFolder value="assets">
										<CustomFile> text.txt </CustomFile>
										<CustomFile> audio.mp3 </CustomFile>
										<CustomFile> doc.pdf </CustomFile>
									</CustomFolder>
									<CustomFolder value="components">
										<CustomFolder value="ui">
											<CustomFile> button.tsx </CustomFile>
										</CustomFolder>
										<CustomFile> header.tsx </CustomFile>
										<CustomFile> footer.tsx </CustomFile>
									</CustomFolder>
									<CustomFolder value="lib">
										<CustomFile> utils.ts </CustomFile>
									</CustomFolder>
									<CustomFile> README.md </CustomFile>
								</FileTree>
							}
						/>
					</div>
				</main>
				<h2 className="text-center text-xl font-bold pt-2 md:pt-4">
					File Tree Props
				</h2>
				<div className="flex justify-center">
					<PropTable rows={BasicContainerProps} />
				</div>
				<h2 className="text-center text-xl font-bold pt-2 md:pt-4">
					Folder Props
				</h2>
				<div className="flex justify-center">
					<PropTable rows={FolderProps} />
				</div>
				<h2 className="text-center text-xl font-bold pt-2 md:pt-4">
					File Props
				</h2>
				<div className="flex justify-center">
					<PropTable rows={FileProps} />
				</div>
			</div>
		</div>
	);
};

interface Props {
	value: string;
	children: React.ReactNode | React.ReactNode[];
}

const CustomFolder = ({ value, children }: Props) => {
	return (
		<Folder
			value={value}
			closedIcon={<IoIosArrowForward />}
			openIcon={<IoIosArrowDown />}
		>
			{Array.isArray(children)
				? children.map((child, index) => {
						const key = `child-${index}`;
						return <Fragment key={key}>{child}</Fragment>;
					})
				: children}
		</Folder>
	);
};

interface CustomFileProps {
	children: string;
}

const CustomFile = ({ children }: CustomFileProps) => {
	const getIcon = () => {
		const fileExtIndex = children.lastIndexOf(".");
		const fileExt = children.substring(fileExtIndex + 1).trim();
		switch (fileExt) {
			case "txt":
				return <FaFileAlt />;
			case "mp3":
				return <FaFileAudio />;
			case "pdf":
				return <FaFilePdf />;
			case "tsx":
			case "ts":
				return <FaFileCode />;
			default:
				return <FaFile />;
		}
	};
	const fileIcon = getIcon();
	return <File fileIcon={fileIcon}>{children}</File>;
};

export default FileTreeDemo;
