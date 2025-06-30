import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ArrowRight, Sparkles} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex justify-center items-center">
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          UI, Refined. <br />
          Animation, Built-in.
        </h1>
        <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Drop-in UI magic. Beautifully animated components ready to drop into
          any project. Built with Tailwind CSS and GSAP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/components/split-text">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="https://github.com/anazbinnoushad/lunipod">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
            >
              Contribute
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
