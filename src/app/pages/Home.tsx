import { HomePageView } from "../components";
import styles from "../templates/main.module.scss";

export function Home() {
  return (
    <div className={styles.page}>
      <HomePageView />
    </div>
  )
}