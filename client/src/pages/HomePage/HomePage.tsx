import HomeLayout from "@/layouts/HomeLayout/HomeLayout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <HomeLayout>
      <div className="flex h-full w-full flex-col items-start justify-center gap-6 px-12">
        <h1 className="text-9xl">Talent Hive</h1>
        <p className="w-2/3 text-2xl">
          Welcome to Talent Hive – Connecting Talent with Opportunity. Discover
          jobs, build your network, and unlock your career potential in one
          dynamic platform.
        </p>
        <Link
          to={"/signin"}
          className="flex items-center justify-center rounded bg-primary px-16 py-3 text-xl text-primary-foreground"
        >
          Login
        </Link>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
