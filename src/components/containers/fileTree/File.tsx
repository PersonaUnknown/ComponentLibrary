import { FaRegFile } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
    children: string;
    className?: string;
    fileIcon?: React.ReactNode;
}

/**
 * Row representing a file in file directory.
 * Consists of a file image (can be custom) + file name
 */
const File = ({
    children,
    className="",
    fileIcon=null
}: Props) => {
    return (
        <div
            className={twMerge(
                "cursor-pointer flex flex-row gap-1 items-center",
                className
            )}
        >
            {fileIcon === null ? <FaRegFile /> : fileIcon}
            {children}
        </div>
    );
}

export default File;