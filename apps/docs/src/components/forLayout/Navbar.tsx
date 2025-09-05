"use client";

import Link from "next/link";
import {Button} from "../ui/button";
import {Github, Menu, X} from "lucide-react";
import {useState} from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center border-b border-dashed border-muted top-0 fixed backdrop-filter backdrop-blur-sm bg-opacity-10 z-20">
      <div className="max-w-6xl h-16 w-full px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="text-lg sm:text-xl font-semibold">
          <Link href="/">LUNIPOD UI</Link>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/components/split-text"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <Link href="https://github.com/anazbinnoushad/lunipod">
            <Button size="sm" className="h-8 text-sm">
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-dashed border-muted">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            <Link
              href="/components/split-text"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="https://github.com/anazbinnoushad/lunipod"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button size="sm" className="w-full h-10 text-sm">
                <Github className="w-4 h-4 mr-2" />
                Github
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
