import {ReactNode, RefObject} from "react";

interface PreviewBlockProps {
  children: ReactNode;
  className?: string;
}

const PreviewBlock = ({children, className}: PreviewBlockProps) => {
  return (
    <div
      className={`w-full h-96 border rounded-2xl flex  border-muted justify-center items-center overflow-clip ${className}`}
    >
      {children}
    </div>
  );
};

export default PreviewBlock;
