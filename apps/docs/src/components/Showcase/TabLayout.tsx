import React, {ReactElement, ReactNode, isValidElement} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import {CodeXml, GalleryThumbnails} from "lucide-react";

interface TabLayoutProps {
  children: ReactNode;
}

interface TabChildProps {
  children: ReactNode;
}

const PreviewTab = ({children}: TabChildProps) => <>{children}</>;
const CodeTab = ({children}: TabChildProps) => <>{children}</>;

const TabLayout = ({children}: TabLayoutProps) => {
  const contentMap: {
    PreviewTab: ReactNode | null;
    CodeTab: ReactNode | null;
  } = {
    PreviewTab: null,
    CodeTab: null,
  };

  React.Children.forEach(children, (child) => {
    if (isValidElement<TabChildProps>(child)) {
      if (child.type === PreviewTab) {
        contentMap.PreviewTab = child.props.children;
      } else if (child.type === CodeTab) {
        contentMap.CodeTab = child.props.children;
      }
    }
  });

  return (
    <Tabs defaultValue="preview" className=" mt-4">
      <TabsList className=" bg-transparent h-11">
        <TabsTrigger value="preview" className=" w-28 gap-2">
          <GalleryThumbnails />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className=" w-28 gap-2">
          <CodeXml />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">{contentMap.PreviewTab}</TabsContent>
      <TabsContent value="code">{contentMap.CodeTab}</TabsContent>
    </Tabs>
  );
};

export {TabLayout, PreviewTab, CodeTab};
