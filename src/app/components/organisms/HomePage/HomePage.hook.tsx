import { useState } from "react";
import { useUrl } from "../../../../core/url/application/adapter/useUrl.hook.ts";
import { useParams } from "react-router-dom";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";

export function useHomePageHooks() {
  const [shortUrl, setShortUrl] = useState<string>();

  const { createUrl, getOneUrlByUrl, getOneUrl } = useUrl();

  const { shortUrlKey } = useParams();
  const redirect = () => {
    if (shortUrlKey !== undefined) {
      getOneUrl(shortUrlKey).then((response: ShortUrl) => {
        const resolvedShortUrl: ShortUrl | undefined = response.data
        window.location.href = resolvedShortUrl?.url ?? import.meta.env.VITE_DOMAIN_URL;
      })
    }
  }

  return {
    shortUrl,
    setShortUrl,
    createUrl,
    getOneUrlByUrl,
    redirect
  }
}