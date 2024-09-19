import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="absolute top-0 flex w-full items-center justify-between bg-background p-8">
      <Link to={"/"} className="font-semibold">
        Talent Hive
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/signin"}>Sign In</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default HomeNavbar;
