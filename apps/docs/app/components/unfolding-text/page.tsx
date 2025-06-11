import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import UnfoldingText from "@repo/ui/Components/UnfoldingText";
import localFont from "next/font/local";
import {unfoldingTextRaw} from "../../../constants/TextComponent/unfoldingTextRaw";
import PropsTable from "@/components/Showcase/PropsTable";
import SectionTitle from "@/components/Showcase/SectionTitle";

const DrukWide = localFont({
  src: "../../fonts/FontsFree-Net-Druk-Wide-Bold.ttf",
  display: "swap",
});

const FlippingCard = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Unfolding Text</h2>
        <h6 className="font-light text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <div className=" mx-4">
                <UnfoldingText
                  text="THE PROJECT"
                  className={`${DrukWide.className}`}
                />
              </div>
            </PreviewBlock>
            <PropsTable />
          </PreviewTab>
          <CodeTab>
            <SectionTitle className=" mt-4">Installation</SectionTitle>
            <CodeBlock language="tsx" code={unfoldingTextRaw.installation} />
            <SectionTitle className=" mt-4">Usage</SectionTitle>
            <CodeBlock language="tsx" code={unfoldingTextRaw.usage} />
            <SectionTitle className=" mt-4">Code</SectionTitle>
            <CodeBlock language="tsx" code={unfoldingTextRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default FlippingCard;
