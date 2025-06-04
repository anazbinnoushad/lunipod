import {ReactNode, RefObject} from "react";

interface PreviewBlockProps {
  children: ReactNode;
}

const PreviewBlock = ({children}: PreviewBlockProps) => {
  return (
    <div className=" w-full h-96 border rounded-2xl flex  border-muted justify-center items-center overflow-clip">
      {children}
    </div>
  );
};

export default PreviewBlock;
