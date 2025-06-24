"use client";
import CodeBlock from "@/components/Showcase/CodeBlock";
import PreviewBlock from "@/components/Showcase/PreviewBlock";
import ScrollPreview from "@/components/Showcase/ScrollPreview";
import {CodeTab, PreviewTab, TabLayout} from "@/components/Showcase/TabLayout";
import FlipCard from "@repo/ui/components/FlipCard";
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
            <div className=" h-[300vh]">
              <FlipCard frontFace={<FRONT />} backFace={<BACK />} />
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
    <div className="w-full h-full bg-gray-200 rounded-3xl p-6 border-2 border-emerald-800 shadow-2xl">
      {/* Profile Image */}
      <div className="mb-6">
        <Image
          src="/images/profile-img.webp"
          alt="Profile"
          width={400}
          height={500}
          className="w-full h-80 object-cover rounded-2xl"
        />
      </div>

      {/* Profile Info */}
      <div className="space-y-4">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">Jerome bell</h1>
          <p className="text-white/80 text-base leading-relaxed">
            Product Designer who focuses
            <br />
            on simplicity & usability
          </p>
        </div>

        {/* Stats and Follow Button */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="w-4 h-4" />
              <span className="font-semibold">423</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Grid className="w-4 h-4" />
              <span className="font-semibold">42</span>
            </div>
          </div>

          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

function BACK() {
  return (
    <div className="w-full h-full bg-gray-200 rounded-3xl p-6 border-2 border-emerald-800 shadow-2xl">
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
