import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import UnfoldingText from "@repo/ui/Components/UnfoldingText";
import localFont from "next/font/local";
import {unfoldingTextRaw} from "../../../constants/TextComponent/unfoldingTextRaw";

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
              <UnfoldingText
                text="THE PROJECT"
                className={`${DrukWide.className}`}
              />
            </PreviewBlock>
          </PreviewTab>
          <CodeTab>
            <h2 className=" text-xl font-bold mb-2">Installation</h2>
            <CodeBlock language="tsx" code={unfoldingTextRaw.installation} />
            <h2 className=" text-xl font-bold mb-2">Usage</h2>
            <CodeBlock language="tsx" code={unfoldingTextRaw.usage} />
            <h2 className=" text-xl font-bold mb-2">Code</h2>
            <CodeBlock language="tsx" code={unfoldingTextRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default FlippingCard;
