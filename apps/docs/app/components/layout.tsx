import Sidebar from "@/components/sidebar/Sidebar";

const DocsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" w-full h-screen flex justify-center backgroundGradient">
      <div className=" max-w-6xl  border-dashed border-t-0 border-b-0 w-full border-accent h-full grid grid-cols-7 pt-24 pr-5">
        <div className=" col-span-2">
          <Sidebar />
        </div>
        <div className=" col-span-5">{children}</div>
      </div>
    </div>
  );
};

export default DocsLayout;
