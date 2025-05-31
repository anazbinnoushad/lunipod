import {ReactNode} from "react";

interface PreviewBlockProps {
  children: ReactNode;
}

const PreviewBlock = ({children}: PreviewBlockProps) => {
  return (
    <div className=" w-full h-96 border rounded-2xl flex  border-muted justify-center items-center">
      <div className=" w-4/6">{children}</div>
    </div>
  );
};

export default PreviewBlock;
