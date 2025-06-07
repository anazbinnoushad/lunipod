interface SectionTitleProps {
  children: string;
  className?: string;
}

const SectionTitle = ({children, className}: SectionTitleProps) => {
  return <h2 className={`text-2xl font-bold mb-4 ${className}`}>{children}</h2>;
};

export default SectionTitle;
