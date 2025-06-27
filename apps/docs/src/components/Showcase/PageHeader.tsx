interface PageHeaderProps {
  heading: string;
  description: string;
}

const PageHeader = ({heading, description}: PageHeaderProps) => {
  return (
    <div>
      <h2 className=" text-3xl font-bold mb-2">{heading}</h2>
      <h6 className="font-light text-muted-foreground">{description}</h6>
    </div>
  );
};

export default PageHeader;
