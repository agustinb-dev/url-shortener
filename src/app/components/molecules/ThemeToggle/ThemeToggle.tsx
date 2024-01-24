import { Checkbox } from "../../atoms";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeToggle() {
  // system-wide and local user theme preference check
  const preferColorSchemeQuery = "(prefers-color-scheme: dark)";
  const initialTheme = localStorage.getItem('theme') || (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");

  // state
  const [theme, setTheme] = useState(initialTheme);

  // handlers
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // events
  useEffect(() => {
    const mediaQuery = matchMedia(preferColorSchemeQuery);
    const handleColorSchemeChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleColorSchemeChange);

      return () =>
        mediaQuery.removeEventListener("change", handleColorSchemeChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <><Checkbox
      name="theme-toggle"
      id="theme-toggle"
      className={styles['theme-toggle-checkbox']}
      checked={theme === "dark"}
      onChange={handleToggleTheme}
    />
      <label htmlFor="theme-toggle" className={styles['theme-toggle-label']}>
        <LightModeIcon className={styles.sun} />
        <DarkModeIcon className={styles.moon} />
      </label>
    </>
  )
}