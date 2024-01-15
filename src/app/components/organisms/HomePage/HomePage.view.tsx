import { UrlForm } from "../../forms/UrlForm/UrlForm.tsx";
import { useHomePageHooks } from "./HomePage.hook.tsx";

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
    <UrlForm
      shortUrl={shortUrl}
      setShortUrl={setShortUrl}
      getOneUrlByUrl={getOneUrlByUrl}
      createUrl={createUrl}
    />
  )
}