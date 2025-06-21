import PageHeader from "@/components/Showcase/PageHeader";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import PropsTable from "@/components/Showcase/PropsTable";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import CountUpLoading from "@repo/ui/components/CountUpLoading";
import {countUpLoadingRaw} from "../../../constants/TextComponent/countUpLoadingRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";
import CodeBlock from "@/components/Showcase/CodeBlock";

const CountUpLoadingShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Count Up Loading"
        description="A loading text component that animates a percentage count-up using masked SVG text, with optional fade-out and a minimum display duration."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <CountUpLoading />
            </PreviewBlock>
            <PropsTable data={countUpLoadingRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={countUpLoadingRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={countUpLoadingRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={countUpLoadingRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default CountUpLoadingShowcase;
