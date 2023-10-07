import Link from "next/link";
import { GiTrefoilShuriken } from "react-icons/gi";
export default function Logo() {
  return (
    <Link href="/">
      <div
        className="flex items-center gap-0.5 hover:text-foreground cursor-pointer text-orange"
        aria-label="crunch logo"
      >
        <GiTrefoilShuriken className="w-6 h-6" />
        <p className="text-inherit text-xl hidden xs:block tracking-tight font-semibold">
          shuriken
        </p>
      </div>
    </Link>
  );
}
