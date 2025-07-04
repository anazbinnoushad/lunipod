"use client";

import PageHeader from "@/components/Showcase/PageHeader";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import SectionTitle from "@/components/Showcase/SectionTitle";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import {orbitSwitchRaw} from "../../../constants/ContainerComponent/orbitSwitchRaw";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PropsTable from "@/components/Showcase/PropsTable";
import OrbitSwitch from "@repo/ui/components/OrbitSwitch";
import {useState} from "react";

const OrbitSwitchShowcase = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div>
      <PageHeader
        heading="Orbit Switch"
        description="A visually animated theme toggle switch that morphs between a sun and moon using GSAP + MorphSVG. Includes animated rays and stars to enhance the light/dark mode transition."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <PreviewBlock>
              <OrbitSwitch
                isDark={isDark}
                onToggle={() => setIsDark((prev) => !prev)}
              />
            </PreviewBlock>
            <PropsTable data={orbitSwitchRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={orbitSwitchRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={orbitSwitchRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={orbitSwitchRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default OrbitSwitchShowcase;
