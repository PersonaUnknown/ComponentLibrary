import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

/**
 * Container for <Folder> and <File> components to create a file directory visually.
 */
const FileTree = ({
    children,
    className=""
}: Props) => {
    return (
        <div 
            className={twMerge(
                "flex flex-col gap-1 p-4 border-2 border-black rounded-xl min-w-full select-none",
                className
            )}
        >
            {
                Array.isArray(children) ?
                children.map((child, index) => {
                    const key = `child-${index}`;
                    return (
                        <Fragment key={key}>
                            {child}
                        </Fragment>
                    );
                }) :
                children
            }
        </div>
    );
}

export default FileTree;