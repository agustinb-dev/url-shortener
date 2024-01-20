import { Dispatch, FormEvent, SetStateAction } from "react";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";
import styles from "./UrlForm.module.scss";
import { Button, Input } from "../../atoms";

interface UrlFormProperties {
  shortUrl: string | undefined,
  setShortUrl: Dispatch<SetStateAction<string | undefined>>,
  getOneUrlByUrl: (url: string) => Promise<ShortUrl | undefined>,
  createUrl: (url: string) => Promise<void>,
}

export const UrlForm = (properties: UrlFormProperties) => {
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
        <div className={styles['url-form-container']}>
            <form
                onSubmit={handleSubmit}
                className={styles['url-form']}
            >
                <Input type="text" name="url" id="url" className={styles['url-form-input']} placeholder={'Shorten a link here...'}/>
                <Button type="submit" value="Shorten It!" className={styles['url-form-button']}>Shorten It!</Button>
            </form>
            <div>
              {properties.shortUrl && <h3><a href={properties.shortUrl}>{properties.shortUrl}</a></h3>}
            </div>
        </div>
    );
};
