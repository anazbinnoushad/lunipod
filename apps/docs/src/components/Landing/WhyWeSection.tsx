const WhyWeSection = () => {
  return (
    <section className="flex justify-center items-center mb-20 md:mb-40 lg:mb-80 px-4">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-balance">
              Who said UI components have to
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-gray-400">be boring?</span>
            </h3>
          </div>
          <div className="max-w-3xl w-full lg:w-1/2">
            <p className="text-gray-400 text-base sm:text-lg font-light text-center lg:text-left leading-relaxed text-pretty">
              With Lunipod UI, building beautiful interfaces is effortless,
              empowering, and enjoyable. Our intuitive component library brings
              together everything you need to create stunning user experiences
              and puts the power of advanced animations right at your
              fingertips. Say goodbye to static components designed in the past
              decade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeSection;
