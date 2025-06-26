import PageHeader from "@/components/Showcase/PageHeader";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import PropsTable from "@/components/Showcase/PropsTable";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import LiquidGlassButton from "@repo/ui/components/LiquidGlassButton";
import {Mail} from "lucide-react";
import {liquidGlassButtonRaw} from "../../../constants/ContainerComponent/liquidGlassButtonRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";
import CodeBlock from "@/components/Showcase/CodeBlock";

const LiquidGlassButtonShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Liquid Glass Button"
        description="A glassmorphic button with GSAP-powered hover motion, optional icon, and subtext for a modern UI touch."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex flex-col gap-10">
              <LiquidGlassButton
                icon={<Mail className="text-gray-700" />}
                text="Email Me"
                subText="Send a direct email"
              />
              <LiquidGlassButton text="Email Me" />
            </PreviewBlock>
            <PropsTable data={liquidGlassButtonRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock
              language="tsx"
              code={liquidGlassButtonRaw.installation}
            />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={liquidGlassButtonRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={liquidGlassButtonRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default LiquidGlassButtonShowcase;
