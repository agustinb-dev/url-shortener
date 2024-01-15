import { Dispatch, FormEvent, SetStateAction } from "react";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";


interface UrlFormProperties {
  shortUrl: string | undefined,
  setShortUrl: Dispatch<SetStateAction<string | undefined>>,
  getOneUrlByUrl: (url: string) => Promise<ShortUrl | undefined>,
  createUrl: (url: string) => Promise<void>,
}

export const UrlForm = (properties: UrlFormProperties) => {

  // TODO: separate into smaller components and use hooks for logic.

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      properties.setShortUrl('');
      const formData = new FormData(event.currentTarget);
      const url = formData.get('url');
      url && await properties.createUrl(url as string);
      if (url) {
        const response: ShortUrl | undefined = await properties.getOneUrlByUrl(url as string);
        const resolvedShortUrl= response?.data
        const userShortUrl = resolvedShortUrl && import.meta.env.VITE_DOMAIN_URL+resolvedShortUrl.shortUrlKey
        properties.setShortUrl(userShortUrl);
      }
      return
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="url">
                    URL:
                </label>
                    <input type="text" name="url" id="url"/>
                <button type="submit" value="short it">short it</button>
            </form>
            <div>
              {properties.shortUrl && <h3><a href={properties.shortUrl}>{properties.shortUrl}</a></h3>}
            </div>
        </>
    );
};
