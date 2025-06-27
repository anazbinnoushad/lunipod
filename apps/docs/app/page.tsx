import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center gap-3 ">
      <div className=" flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center text-gray-300">
          UI, Refined. <br />
          Animation, Built-in.
        </h1>
        <h5 className=" max-w-2xl  text-center text-muted-foreground mt-2">
          Drop-in UI magic. Beautifully animated components ready to drop into
          any project. Built with <span>Tailwind CSS</span> and{" "}
          <span>GSAP</span>.
        </h5>
        <div className=" flex flex-row gap-3 mt-6">
          <Link href="/components/split-text">
            <Button size="lg" className=" w-32">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/anazbinnoushad/lunipod">
            <Button variant="secondary" size="lg" className=" w-32">
              Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
