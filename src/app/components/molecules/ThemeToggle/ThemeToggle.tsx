import { Checkbox } from "../../atoms";
import { useEffect, useLayoutEffect, useState } from "react";
export function ThemeToggle() {
  // system-wide and local user theme preference check
  const preferColorSchemeQuery = "(prefers-color-scheme: dark)";
  const initialTheme = localStorage.getItem('theme') || (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");

  // state
  const [theme, setTheme] = useState(initialTheme);

  // handlers
  const handleToggleTheme = () => {
    // localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // events
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  console.log(theme);

  return (
    <Checkbox
      name="theme-toggle"
      id="theme-toggle"
      checked={theme === 'dark'}
      onChange={handleToggleTheme}
    />
  )
}