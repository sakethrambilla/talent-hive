import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div onClick={handleThemeChange}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </div>
  );
}

export default ThemeToggle;
