import HeroSection from "@/components/Landing/HeroSection";
import NewsLetter from "@/components/Landing/NewsLetter";
import ShowcaseSection from "@/components/Landing/ShowcaseSection";
import WhyWeSection from "@/components/Landing/WhyWeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyWeSection />
      <ShowcaseSection />
      <NewsLetter />
    </>
  );
}
