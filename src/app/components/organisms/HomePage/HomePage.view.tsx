import { UrlForm } from "../../forms/UrlForm/UrlForm.tsx";
import { useHomePageHooks } from "./HomePage.hook.tsx";
import styles from "./HomePage.module.scss";

export function HomePageView() {
  const {
    shortUrl,
    setShortUrl,
    getOneUrlByUrl,
    createUrl,
    redirect
  } = useHomePageHooks();

  redirect()

  return (
    <div className={styles.home_page}>
      <UrlForm
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        getOneUrlByUrl={getOneUrlByUrl}
        createUrl={createUrl}
      />
    </div>
  )
}