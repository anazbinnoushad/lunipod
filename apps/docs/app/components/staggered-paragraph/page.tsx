import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import StaggeredParagraph from "@repo/ui/Components/StaggeredParagraph";
import {staggeredParagraphRaw} from "../../../constants/TextComponent/staggeredParagraphRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";

const StaggeredParagraphShowcase = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Staggered Paragraph</h2>
        <h6 className="font-light text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <div className=" mx-12">
                <StaggeredParagraph>
                  Developer who loves building fast, accessible web apps with
                  smooth user experiences. I’m all about blending thoughtful
                  design with clean code to bring cool
                </StaggeredParagraph>
              </div>
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock
              language="tsx"
              code={staggeredParagraphRaw.installation}
            />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={staggeredParagraphRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={staggeredParagraphRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default StaggeredParagraphShowcase;
