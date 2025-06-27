"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import { FilePathLabel } from "@/components/Showcase/FilePath";
import {
  CodeTab,
  PreviewTab,
  TabLayout,
} from "@/components/Showcase/TabLayout";
import TextVelocityLoop from "@repo/ui/components/TextVelocityLoop";
import { textVelocityLoopRaw } from "../../../constants/TextComponent/textVelocityLoopRaw";
import SectionTitle from "@/components/Showcase/SectionTitle";
import PropsTable from "@/components/Showcase/PropsTable";
import PageHeader from "@/components/Showcase/PageHeader";

const TextVelocityLoopShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Text Velocity Loop"
        description="A responsive horizontal text marquee that reacts to scroll direction and speed using GSAP."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <ScrollPreview>
                {(scrollContainerRef) => (
                  <>
                    <div className="h-96 text-muted-foreground flex justify-center items-center">
                      SCROLL DOWN
                    </div>
                    <div className="h-96 pt-96 pb-96">
                      <TextVelocityLoop
                        scrollContainerRef={scrollContainerRef}
                      />
                    </div>
                    <div className="h-96 text-muted-foreground flex justify-center items-center">
                      SCROLL UP
                    </div>
                  </>
                )}
              </ScrollPreview>
            </PreviewBlock>
            <PropsTable data={textVelocityLoopRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.code} />

            <SectionTitle>HorizontalLoop Function</SectionTitle>
            <FilePathLabel path="../helpers/horizontalLoop.js" />
            <CodeBlock language="tsx" code={textVelocityLoopRaw.helperCode} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default TextVelocityLoopShowcase;
