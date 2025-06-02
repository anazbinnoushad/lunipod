import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import MagneticText from "@repo/ui/Components/MagneticText";
import {magneticTextRaw} from "../../../constants/TextComponent/magenticTextRaw";

const MagneticTextShowcase = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Magnetic Text</h2>
        <h6 className="font-light text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <MagneticText text="OKSUNFON" />
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <h2 className=" text-xl font-bold mb-2">Installation</h2>
            <CodeBlock language="tsx" code={magneticTextRaw.installation} />
            <h2 className=" text-xl font-bold mb-2">Usage</h2>
            <CodeBlock language="tsx" code={magneticTextRaw.usage} />
            <h2 className=" text-xl font-bold mb-2">Code</h2>
            <CodeBlock language="tsx" code={magneticTextRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default MagneticTextShowcase;
