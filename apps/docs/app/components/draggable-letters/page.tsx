import PageHeader from "@/components/Showcase/PageHeader";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import DraggableLetters from "@repo/ui/components/DraggableLetters";
import {draggableLettersRaw} from "../../../constants/TextComponent/draggableLettersRaw";
import PropsTable from "@/components/Showcase/PropsTable";
import SectionTitle from "@/components/Showcase/SectionTitle";
import CodeBlock from "@/components/Showcase/CodeBlock";

const DraggableLettersShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Draggable Letters"
        description="A playful component that makes each letter of a string draggable using GSAP. Customizable direction, spacing, and drag events. Ideal for interactive titles or creative UIs."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <DraggableLetters text="LUNIPOD" />
            </PreviewBlock>
            <PropsTable data={draggableLettersRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={draggableLettersRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={draggableLettersRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={draggableLettersRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default DraggableLettersShowcase;
