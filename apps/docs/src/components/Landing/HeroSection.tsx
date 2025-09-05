import {ArrowRight, Sparkles} from "lucide-react";
import {Badge} from "../ui/badge";
import Link from "next/link";
import {Button} from "../ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-12">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6">
          <Badge
            variant="secondary"
            className="bg-gray-800 text-gray-300 border-gray-700"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Beautiful UI Components
          </Badge>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-balance">
          UI, Refined. <br />
          Animation, Built-in.
        </h1>
        <p className="text-gray-400 text-base sm:text-lg font-light text-center leading-relaxed mb-8 max-w-2xl mx-auto px-4 text-pretty">
          Drop-in UI magic. Beautifully animated components ready to drop into
          any project. Built with Tailwind CSS and GSAP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link href="/components/split-text">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="https://github.com/anazbinnoushad/lunipod">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 bg-transparent w-full sm:w-auto"
            >
              Contribute
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
