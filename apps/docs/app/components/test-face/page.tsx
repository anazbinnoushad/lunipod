"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import {
  CodeTab,
  PreviewTab,
  TabLayout,
} from "@/components/Showcase/TabLayout";
import LiquidGlassButton from "@repo/ui/components/LiquidGlassButton";
import { Mail } from "lucide-react";

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
            <PreviewBlock className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex flex-col gap-3">
              <LiquidGlassButton
                icon={<Mail className="text-gray-700" />}
                text="Email Me"
                subText="Send a direct email"
              />
              <LiquidGlassButton text="Email Me" />
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
