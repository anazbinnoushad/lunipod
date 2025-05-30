import Link from "next/link";
import {Button} from "../ui/button";
import {Github} from "lucide-react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-center border-b border-dashed  top-0 bg-background fixed">
      <div className=" max-w-6xl w-full py-2 flex justify-between">
        <div className=" text-xl font-semibold">LUNIPOD UI</div>
        <div className=" flex gap-6 items-center">
          <Link href="/components" className=" text-sm text-muted-foreground">
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
