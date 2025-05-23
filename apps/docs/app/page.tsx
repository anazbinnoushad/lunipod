import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <Link href="/docs">
        <Button size="lg" className=" w-32">
          View Docs
        </Button>
      </Link>
      <Link href="https://github.com/anazbinnoushad/lunipod">
        <Button size="lg" variant="secondary" className=" w-32">
          Github
        </Button>
      </Link>
    </div>
  );
}
