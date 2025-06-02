import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import SplitTextReveal from "@repo/ui/Components/SplitTextReveal";
import {splitTextRevealRaw} from "../../../constants/TextComponent/SplitTextRaw";

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
            <PreviewBlock>
              <SplitTextReveal>
                Developer who loves building fast, accessible web apps with
                smooth user experiences. I’m all about blending thoughtful
                design with clean code to bring cool
              </SplitTextReveal>
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <div className=" space-y-4">
              <h2 className=" text-xl font-bold mb-2">Installation</h2>
              <CodeBlock
                language="tsx"
                code={splitTextRevealRaw.installation}
              />
              <h2 className=" text-xl font-bold mb-2">Usage</h2>
              <CodeBlock language="tsx" code={splitTextRevealRaw.usage} />
            </div>
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default SplitText;
