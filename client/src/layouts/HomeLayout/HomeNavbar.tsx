import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="flex w-full items-center justify-between p-8">
      <Link to={"/"} className="font-semibold">
        Talent Hive
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Login</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default HomeNavbar;
