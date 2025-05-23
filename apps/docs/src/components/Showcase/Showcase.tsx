"use client";

import {useState} from "react";
import {Button} from "../ui/button";
import {ShowcaseType} from "@/types/generics";
import Preview from "./Preview";
import Code from "./Code";

const Showcase = () => {
  const [view, setView] = useState<ShowcaseType>(ShowcaseType.Preview);

  const tabs = [
    {label: "Preview", type: ShowcaseType.Preview},
    {label: "Code", type: ShowcaseType.Code},
  ];

  return (
    <div className="my-10">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.type}
            variant={view === tab.type ? "outline" : "ghost"}
            onClick={() => setView(tab.type)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="mt-8">
        {view === ShowcaseType.Preview && <Preview />}
        {view === ShowcaseType.Code && <Code />}
      </div>
    </div>
  );
};

export default Showcase;
