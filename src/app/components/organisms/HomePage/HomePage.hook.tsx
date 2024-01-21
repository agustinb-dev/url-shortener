import { useState } from "react";
import { useUrl } from "../../../../core/url/application/adapter/useUrl.hook.ts";
import { useParams } from "react-router-dom";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";

export function useHomePageHooks() {
  const [shortUrl, setShortUrl] = useState<ShortUrl>();

  const { createUrl, getOneUrlByUrl, getOneUrl } = useUrl();

  const { shortUrlKey } = useParams();
  const redirect = () => {
    if (shortUrlKey !== undefined) {
      getOneUrl(shortUrlKey).then((response: ShortUrl) => {
        const resolvedShortUrl: ShortUrl | undefined = response.data
        window.location.href = resolvedShortUrl?.url ?? window.location.origin;
      })
    }
  }

  const getShortUrl = async (url: string) => {
    const response: ShortUrl | undefined = await getOneUrlByUrl(url as string);
    const resolvedShortUrl= response?.data
    setShortUrl(resolvedShortUrl);
    // const userShortUrl = resolvedShortUrl && import.meta.env.VITE_DOMAIN_URL+resolvedShortUrl.shortUrlKey
    // setShortUrl(userShortUrl);
  }


  return {
    shortUrl,
    setShortUrl,
    createUrl,
    getOneUrlByUrl,
    redirect,
    getShortUrl,
  }
}