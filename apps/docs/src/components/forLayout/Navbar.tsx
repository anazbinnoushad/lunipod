import Link from "next/link";
import {Button} from "../ui/button";
import {Github} from "lucide-react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-center border-b border-dashed border-muted  top-0 fixed backdrop-filter backdrop-blur-sm bg-opacity-10 z-20">
      <div className=" max-w-6xl h-16 w-full py-2 flex justify-between items-center">
        <div className=" text-xl font-semibold">
          <Link href="/">LUNIPOD UI</Link>
        </div>
        <div className=" flex gap-6 items-center">
          <Link
            href="/components/split-text"
            className=" text-sm text-muted-foreground"
          >
            Components
          </Link>
          <Link href="https://github.com/anazbinnoushad/lunipod">
            <Button size="sm" className=" h-6 text-sm">
              <Github />
              Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
