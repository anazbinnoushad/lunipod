import {Heart} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-10 pt-10">
      <div className="flex justify-center items-center">
        <h4 className=" p-2 text-muted-foreground font-extralight text-sm flex gap-1 items-center">
          <span>Made with</span>
          <Heart size={14} />
          <span>
            by{" "}
            <Link
              href="https://anaz.dev"
              target="_blank"
              className=" underline underline-offset-2"
            >
              this guy
            </Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
