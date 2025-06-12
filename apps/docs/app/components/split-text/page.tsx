import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import SectionTitle from "@/components/Showcase/SectionTitle";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import SplitText from "@repo/ui/Components/SplitText";
import {splitTextRaw} from "../../../constants/TextComponent/SplitTextRaw";

const SplitTextShowcase = () => {
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
              <div className=" mx-12">
                <SplitText type="words" animateOnScroll={true}>
                  <h1>This is animated by word</h1>
                </SplitText>
              </div>
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={splitTextRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={splitTextRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={splitTextRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default SplitTextShowcase;
