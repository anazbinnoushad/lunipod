import CodeBlock from "@/components/CodeBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import SplitTextReveal from "@repo/ui/Components/SplitTextReveal";

const SplitText = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Split Text</h2>
        <h6 className="font-light text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
      <div>
        <TabLayout>
          <PreviewTab>
            <div className=" w-full h-96 border rounded-2xl flex justify-center items-center">
              <div className=" w-4/6">
                <SplitTextReveal>
                  Developer who loves building fast, accessible web apps with
                  smooth user experiences. I’m all about blending thoughtful
                  design with clean code to bring cool
                </SplitTextReveal>
              </div>
            </div>
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

export default SplitText;
