import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import MagneticText from "@repo/ui/components/MagneticText";
import {magneticTextRaw} from "../../../constants/TextComponent/magenticTextRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";
import PropsTable from "@/components/Showcase/PropsTable";
import PageHeader from "@/components/Showcase/PageHeader";

const MagneticTextShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Magnetic Text"
        description="An animated, draggable text component where each letter bursts into view and reacts to drag interactions with inertia and elasticity."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <MagneticText text="OKSUNFON" />
            </PreviewBlock>
            <PropsTable data={magneticTextRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={magneticTextRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={magneticTextRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={magneticTextRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default MagneticTextShowcase;
