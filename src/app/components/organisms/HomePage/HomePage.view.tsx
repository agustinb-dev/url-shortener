import { UrlForm } from "../../forms/UrlForm/UrlForm.tsx";
import { useHomePageHooks } from "./HomePage.hook.tsx";
import styles from "./HomePage.module.scss";
import { ShortUrlBox } from "../../molecules";

export function HomePageView() {
  const {
    shortUrl,
    setShortUrl,
    createUrl,
    redirect,
    getShortUrl
  } = useHomePageHooks();

  redirect()

  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page-container']}>
        <UrlForm
        setShortUrl={setShortUrl}
        getShortUrl={getShortUrl}
        createUrl={createUrl}
        />
        <ShortUrlBox
          shortUrl={shortUrl}
        />
      </div>
    </div>
  )
}