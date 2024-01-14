import { FormEvent, useState } from "react";
import { useUrl } from "../../../../core/url/application/adapter/useUrl.hook.ts";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";
import { useParams } from "react-router-dom";

export const UrlForm = () => {

  // TODO: separate into smaller components and use hooks for logic.

    const [shortUrl, setShortUrl] = useState<string>();

    const { createUrl, getOneUrlByUrl, getOneUrl } = useUrl();

    const { shortUrlKey } = useParams()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setShortUrl('');
      const formData = new FormData(event.currentTarget);
      const url = formData.get('url');
      url && await createUrl(url as string);
      if (url) {
        const response: ShortUrl | undefined = await getOneUrlByUrl(url as string);
        const resolvedShortUrl= response?.data
        const userShortUrl = resolvedShortUrl && import.meta.env.VITE_DOMAIN_URL+resolvedShortUrl.shortUrlKey
        setShortUrl(userShortUrl);
      }
      return
    }

    const redirect = () => {
      if (shortUrlKey !== undefined) {
        getOneUrl(shortUrlKey).then((response: ShortUrl) => {
          const resolvedShortUrl: ShortUrl | undefined = response.data
          window.location.href = resolvedShortUrl?.url ?? import.meta.env.VITE_DOMAIN_URL;
        })
      }
    }

    redirect();

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="url">
                    URL:
                    <input type="text" name="url" id="url"/>
                </label>
                <button type="submit" value="short it">short it</button>
            </form>
            <div>
              {shortUrl && <h3><a href={shortUrl}>{shortUrl}</a></h3>}
            </div>
        </>
    );
};
