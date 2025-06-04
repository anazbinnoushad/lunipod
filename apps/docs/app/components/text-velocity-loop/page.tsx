"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import TextVelocityLoop from "@repo/ui/Components/TextVelocityLoop";
import {textVelocityLoopRaw} from "../../../constants/TextComponent/textVelocityLoopRaw";

const TextVelocityLoopShowcase = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Text Velocity Loop</h2>
        <h6 className="font-light text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
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
          </PreviewTab>
          <CodeTab>
            <h2 className=" text-xl font-bold mb-2">Installation</h2>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.installation} />
            <h2 className=" text-xl font-bold mb-2">Usage</h2>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.usage} />
            <h2 className=" text-xl font-bold mb-2">Code</h2>
            <CodeBlock language="tsx" code={textVelocityLoopRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default TextVelocityLoopShowcase;
