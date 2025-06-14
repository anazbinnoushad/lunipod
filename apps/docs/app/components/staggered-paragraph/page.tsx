import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import StaggeredParagraph from "@repo/ui/Components/StaggeredParagraph";
import {staggeredParagraphRaw} from "../../../constants/TextComponent/staggeredParagraphRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";
import PropsTable from "@/components/Showcase/PropsTable";

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
                  Lunipod UI is a sleek component library built with Tailwind
                  CSS and GSAP, offering ready-to-use animated UI elements for
                  modern web projects. Designed for effortless copy-paste
                  integration, each component is responsive, customizable, and
                  visually dynamic—perfect for developers who want clean design
                  and smooth animations without extra setup.
                </StaggeredParagraph>
              </div>
            </PreviewBlock>
            <PropsTable data={staggeredParagraphRaw.props} />
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
