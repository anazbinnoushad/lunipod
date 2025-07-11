import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ArrowRight, Sparkles} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-12 items-center">
            <div className=" text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Who said UI components have to
                <br />
                <span className="text-gray-400">be boring?</span>
              </h2>
            </div>
            <div className=" max-w-3xl">
              <p className="text-gray-400 text-lg font-light text-center leading-relaxed">
                With Lunipod UI, building beautiful interfaces is effortless,
                empowering, and enjoyable. Our intuitive component library
                brings together everything you need to create stunning user
                experiences and puts the power of advanced animations right at
                your fingertips. Say goodbye to static components designed in
                the past decade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
