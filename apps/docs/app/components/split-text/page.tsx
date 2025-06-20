import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import SectionTitle from "@/components/Showcase/SectionTitle";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import SplitText from "@repo/ui/components/SplitText";
import {splitTextRaw} from "../../../constants/TextComponent/SplitTextRaw";
import PropsTable from "@/components/Showcase/PropsTable";
import PageHeader from "@/components/Showcase/PageHeader";

const SplitTextShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Split Text"
        description="A powerful text animation component that splits content into lines, words, or characters and animates them with GSAP."
      />
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
            <PropsTable data={splitTextRaw.props} />
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
