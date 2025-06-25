"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import FlippingCard from "@repo/ui/components/FlippingCard";
import {
  Calendar,
  Code,
  Grid,
  Mail,
  MapPin,
  Palette,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const TestFace = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Testing Component</h2>
        <h6 className="font-light text-muted-foreground">
          TEST COMPONENTS HERE
        </h6>
      </div>
      <div className=" relative"></div>
      <div>
        <TabLayout>
          <PreviewTab>
            {/* <ScrollPreview>
              {(scrollContainerRef) => (
                <>
                  <div className="h-[300vh] w-full ">
                    <FlipCard frontFace={<FRONT />} backFace={<BACK />} />
                  </div>
                </>
              )}
            </ScrollPreview> */}
            <div className="h-[300vh] w-full ">
              <FlippingCard frontFace={<FRONT />} backFace={<BACK />} />
            </div>
          </PreviewTab>
          <CodeTab>
            <h2 className=" text-xl font-bold mb-2">Installation</h2>
            <CodeBlock language="tsx" code={`npm i @gsap/react`} />
            <h2 className=" text-xl font-bold mb-2">Usage</h2>
            <CodeBlock
              language="tsx"
              code={`
<SplitTextReveal>
    Developer who loves building fast, accessible web apps with
    smooth user experiences. I’m all about blending thoughtful
    design with clean code to bring cool
  </SplitTextReveal>
`}
            />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default TestFace;

const FRONT = () => {
  return (
    <div className="bg-emerald-900 text-white max-w-xs w-full rounded-[32px] overflow-hidden shadow-lg p-5">
      <div className="rounded-[24px] overflow-hidden">
        <Image
          src="/images/profile-img.webp"
          alt="Jerome Bell"
          className="w-full h-72 object-cover"
          width={300}
          height={288}
        />
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Jerome bell</h2>
        <p className="text-sm text-gray-400 mt-1">
          Product Designer who focuses on simplicty & usability
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />

            <span>423</span>
          </div>
          <div className="flex items-center gap-1">
            <Grid className="w-4 h-4" />
            <span>42</span>
          </div>
        </div>
        <button className="bg-[#215941] hover:bg-[#2b6f53] transition px-5 py-2 rounded-full text-sm font-medium text-white shadow-md">
          Follow
        </button>
      </div>
    </div>
  );
};

function BACK() {
  return (
    <div className="bg-emerald-900 text-white max-w-xs w-full rounded-[32px] overflow-hidden shadow-lg p-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-white text-2xl font-bold mb-2">About Jerome</h2>
        <p className="text-white/80 text-sm">
          Passionate about creating intuitive digital experiences
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-white text-lg font-semibold mb-3">Skills</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
            <Code className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">UI/UX</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
            <Palette className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Design</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Prototyping</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
            <Star className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Strategy</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-white/90">
            <Mail className="w-4 h-4" />
            <span className="text-sm">jerome.bell@email.com</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Available for projects</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button className="flex-1 bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
          Message
        </button>
        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-semibold py-3 rounded-full hover:bg-white/30 transition-colors text-sm">
          Portfolio
        </button>
      </div>
    </div>
  );
}
