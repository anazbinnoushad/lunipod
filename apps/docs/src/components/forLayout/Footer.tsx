import {Heart} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-8 mt-12 border-t  flex flex-col md:flex-row justify-center items-center">
      <div className=" max-w-4xl flex justify-between w-full">
        <div>
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
        <div className="flex flex-row gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition-colors text-gray-400 text-sm font-light"
          >
            Components
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors text-gray-400 text-sm font-light"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors text-gray-400 text-sm font-light"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
