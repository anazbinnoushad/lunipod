const ShowcaseSection = () => {
  return (
    <section className="flex justify-center items-center px-4">
      <div className="container flex flex-col gap-5 max-w-6xl">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8 text-balance">
            Everything you need.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Nothing you don't
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon="TS"
            title="TypeScript Ready"
            description="Full type safety out of the box"
          />
          <FeatureCard
            icon="100%"
            title="Open Source"
            description="Community-driven, transparent code contribute and customize freely."
          />
          <FeatureCard
            icon="0"
            title="Zero setup"
            description="Drop in components and go—no configuration required."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard
            icon="⚡"
            title="Performance Optimized"
            description="Lightweight components with minimal runtime overhead for fast load times."
          />
          <FeatureCard
            icon="✨"
            title="Animated & Styled to Perfection"
            description="Stunning animations powered by GSAP and seamless customizability with Tailwind CSS."
          />
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
    <div className="border bg-neutral-900 rounded-3xl p-4 py-8 md:py-12 lg:py-16 w-full">
      <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
        {icon}
      </h4>
      <h5 className="text-xl sm:text-2xl md:text-3xl text-gray-200 text-balance">
        {title}
      </h5>
      <p className="text-sm sm:text-base font-light mt-4 text-gray-200 text-pretty">
        {description}
      </p>
    </div>
  );
};
