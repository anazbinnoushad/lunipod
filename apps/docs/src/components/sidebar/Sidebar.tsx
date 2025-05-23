import Link from "next/link";
import {nav} from "./nav";

const Sidebar = () => {
  return (
    <nav className="pl-5 flex flex-col gap-2">
      {nav.map(({title, header, route}, idx) => {
        const key = `${title}_${idx}`;
        return header ? (
          <h3 className="text-xl font-semibold mb-1" key={key}>
            {title}
          </h3>
        ) : (
          <Link href={`/docs/${route!}`} key={key}>
            <h4 className="text-base font-light text-muted-foreground">
              {title}
            </h4>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
