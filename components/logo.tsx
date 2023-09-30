import Link from "next/link";
import { Fan } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/">
      <div
        className="flex items-center gap-0.5 hover:text-accent cursor-pointer"
        aria-label="crunch logo"
      >
        <Fan />
        <p className="font-bold text-inherit text-xl pb-1 hidden xs:block tracking-tighter">
          crunchycool
        </p>
      </div>
    </Link>
  );
}
