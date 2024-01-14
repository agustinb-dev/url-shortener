import { FormEvent, useState } from "react";
import { useUrl } from "../../../../core/url/application/adapter/useUrl.hook.ts";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";
import { useParams } from "react-router-dom";

export const UrlForm = () => {

    const [shortUrl, setShortUrl] = useState<string>();

    const { createUrl, getOneUrlByUrl, getOneUrl } = useUrl();

    const { shortUrlKey } = useParams()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const url = formData.get('url');
      url && await createUrl(url as string);
      if (url) {
        const response: ShortUrl = await getOneUrlByUrl(url as string);
        const resolvedShortUrl: ShortUrl = response.data
        const userShortUrl = 'http://localhost:5173/'+resolvedShortUrl.shortUrlKey
        setShortUrl(userShortUrl);
      }
      return
    }

    const redirect = () => {
      if (shortUrlKey !== undefined) {
        getOneUrl(shortUrlKey).then((response: ShortUrl) => {
          const resolvedShortUrl: ShortUrl = response.data
          window.location.href = resolvedShortUrl.url;
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
