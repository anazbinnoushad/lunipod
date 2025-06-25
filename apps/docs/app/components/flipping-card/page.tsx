import CodeBlock from "@/components/Showcase/CodeBlock";
import PageHeader from "@/components/Showcase/PageHeader";
import PropsTable from "@/components/Showcase/PropsTable";
import SectionTitle from "@/components/Showcase/SectionTitle";
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
import {flippingCardRaw} from "../../../constants/ContainerComponent/flippingCardRaw";

const FlippingCardShowcase = () => {
  return (
    <div>
      <PageHeader
        heading="Flipping Card"
        description="A scroll-triggered 3D card that flips from front to back using GSAP animation with pinning and smooth rotation."
      />
      <div>
        <TabLayout>
          <PreviewTab>
            <div className="h-[130vh] w-full ">
              <FlippingCard frontFace={<FrontFace />} backFace={<BackFace />} />
            </div>
            <PropsTable data={flippingCardRaw.props} />
          </PreviewTab>
          <CodeTab>
            <SectionTitle>Installation</SectionTitle>
            <CodeBlock language="tsx" code={flippingCardRaw.installation} />
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="tsx" code={flippingCardRaw.usage} />
            <SectionTitle>Code</SectionTitle>
            <CodeBlock language="tsx" code={flippingCardRaw.code} />
          </CodeTab>
        </TabLayout>
      </div>
    </div>
  );
};

export default FlippingCardShowcase;

const FrontFace = () => {
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

const BackFace = () => {
  return (
    <div className="bg-emerald-900 text-white max-w-xs w-full rounded-[32px] overflow-hidden shadow-lg p-5">
      <div className="mb-6">
        <h2 className="text-white text-2xl font-bold mb-2">About Jerome</h2>
        <p className="text-white/80 text-sm">
          Passionate about creating intuitive digital experiences
        </p>
      </div>

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

      <div className="mb-6">
        <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-white/90">
            <Mail className="w-4 h-4" />
            <span className="text-sm">jerome.bell@example.com</span>
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
};
