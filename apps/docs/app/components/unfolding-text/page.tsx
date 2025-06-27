import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import UnfoldingText from "@repo/ui/components/UnfoldingText";
import localFont from "next/font/local";
import {unfoldingTextRaw} from "../../../constants/TextComponent/unfoldingTextRaw";
import PropsTable from "@/components/Showcase/PropsTable";
import SectionTitle from "@/components/Showcase/SectionTitle";
import PageHeader from "@/components/Showcase/PageHeader";

const DrukWide = localFont({
  src: "../../fonts/FontsFree-Net-Druk-Wide-Bold.ttf",
  display: "swap",
});

const FlippingCard = () => {
  return (
    <div>
      <PageHeader
        heading="Unfolding Text"
        description="A 3D-style text animation that unfolds along the Y-axis using GSAP with customizable stroke, fill, and rotation for dramatic typographic reveals."
      />
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
            <PropsTable data={unfoldingTextRaw.props} />
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
