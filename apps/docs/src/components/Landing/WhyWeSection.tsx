const WhyWeSection = () => {
  return (
    <section className=" flex justify-center items-center mb-80">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="flex gap-12 items-center">
          <div className=" text-left w-1/2">
            <h3 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent ">
              Who said UI components have to
              <br />
              <span className="text-gray-400">be boring?</span>
            </h3>
          </div>
          <div className=" max-w-3xl w-1/2">
            <p className="text-gray-400 text-lg font-light text-left leading-relaxed">
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
