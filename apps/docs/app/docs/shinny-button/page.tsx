import Showcase from "@/components/Showcase/Showcase";

const ShinyButton = () => {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-bold mb-2">Shinny Button</h2>
        <h6 className=" text-lg text-muted-foreground">
          A customizable, compound modal component with animated transitions
        </h6>
      </div>
      <div>
        <Showcase />
      </div>
    </div>
  );
};

export default ShinyButton;
