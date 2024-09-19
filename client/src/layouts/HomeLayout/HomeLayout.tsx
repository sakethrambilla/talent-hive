import { ReactNode } from "react";
import HomeNavbar from "./HomeNavbar";

interface HomeLayout {
  children: ReactNode;
}
function HomeLayout({ children }: HomeLayout) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HomeNavbar />
      {children}
    </div>
  );
}

export default HomeLayout;
