"use client";

import Link from "next/link";
import {nav} from "./nav";
import {usePathname} from "next/navigation";
import {Badge} from "../ui/badge";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className="pl-5 flex flex-col gap-2">
      {nav.map((navItem, idx) => {
        const key = `${navItem.title}_${idx}`;
        const href = `/components/${navItem.route}`;
        const isActive = pathname === href;
        return navItem.header ? (
          <h3 className="text-lg mb-1" key={key}>
            {navItem.title}
          </h3>
        ) : (
          <Link href={href} key={key}>
            <h4
              className={`text-base flex gap-1.5 items-center font-light text-muted-foreground hover:translate-x-1 hover:text-white transition-all transform-cpu ${isActive && ` text-white`}`}
            >
              {navItem.title}
              {navItem.badge && <Badge>{navItem.badge}</Badge>}
            </h4>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
