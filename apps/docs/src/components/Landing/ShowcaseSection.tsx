const ShowcaseSection = () => {
  return (
    <section className="  flex justify-center items-center">
      <div className="container flex flex-col gap-5  max-w-6xl">
        <div>
          <h3 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8">
            Everything you need.
            <br /> Nothing you don't
          </h3>
        </div>
        <div className=" flex gap-5">
          <div className=" w-1/3">
            <FeatureCard
              icon="TS"
              title="TypeScript Ready"
              description="  Full type safety out of the box"
            />
          </div>
          <div className=" w-1/3">
            <FeatureCard
              icon="100%"
              title="Open Source"
              description="Community-driven, transparent code contribute and customize freely."
            />
          </div>
          <div className=" w-1/3">
            {" "}
            <FeatureCard
              icon="0"
              title="Zero setup"
              description="Drop in components and go—no configuration required."
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className=" w-1/2">
            <FeatureCard
              icon="TS"
              title="Performance Optimized"
              description="Lightweight components with minimal runtime overhead for fast load times."
            />
          </div>
          <div className=" w-1/2">
            <FeatureCard
              icon="TS"
              title="Animated & Styled to Perfection"
              description=" Stunning animations powered by GSAP and seamless customizability with Tailwind CSS."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({icon, title, description}: FeatureCardProps) => {
  return (
    <div className="   border  bg-neutral-900 rounded-3xl p-4 py-16 w-full">
      <h4 className=" text-7xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
        {icon}
      </h4>
      <h5 className=" text-3xl bg-gradient-to-b from-gray-200  to-gray-500 bg-clip-text text-transparent">
        {title}
      </h5>
      <p className=" text-base font-light mt-4 text-gray-200">{description}</p>
    </div>
  );
};
