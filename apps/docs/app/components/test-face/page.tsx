"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import ThemeToggler from "@repo/ui/components/ThemeToggler";
import {Mail} from "lucide-react";

const TestFace = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Testing Component</h2>
        <h6 className="font-light text-muted-foreground">
          TEST COMPONENTS HERE
        </h6>
      </div>
      <div className=" relative"></div>
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock className=" gap-3">
              <ThemeToggler />
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <h2 className=" text-xl font-bold mb-2">Installation</h2>
            <CodeBlock language="tsx" code={`npm i @gsap/react`} />
            <h2 className=" text-xl font-bold mb-2">Usage</h2>
            <CodeBlock
              language="tsx"
              code={`
<SplitTextReveal>
    Developer who loves building fast, accessible web apps with
    smooth user experiences. I’m all about blending thoughtful
    design with clean code to bring cool
  </SplitTextReveal>
`}
            />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default TestFace;
