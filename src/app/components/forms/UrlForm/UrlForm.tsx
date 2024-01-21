import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from "./UrlForm.module.scss";
import { Button, Input, Typography } from "../../atoms";
import { isValidUrl } from "../../../utils/urlUtils.ts";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";

interface UrlFormProperties {
  setShortUrl: Dispatch<SetStateAction<ShortUrl | undefined>>,
  getShortUrl: (url: string) => Promise<void>,
  createUrl: (url: string) => Promise<void>,
}

export const UrlForm = (properties: UrlFormProperties) => {

  const [invalidUrl, setInvalidUrl] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      properties.setShortUrl(undefined);
      const formData = new FormData(event.currentTarget);
      const url = formData.get('url');
      event.currentTarget.reset();
      if (!url || !isValidUrl(url as string)) return setInvalidUrl(true);
      setInvalidUrl(false);
      await properties.createUrl(url as string);
      await properties.getShortUrl(url as string);
      return
    };

    return (
        <div className={styles['url-form-container']}>
            <form
                onSubmit={handleSubmit}
                className={styles['url-form']}
            >
                <Input
                  type="text"
                  name="url"
                  id="url"
                  className={invalidUrl ? styles['url-form-input-error'] : styles['url-form-input']}
                  placeholder={'Shorten a link here...'}
                />
                <Button type="submit" value="Shorten It!" className={styles['url-form-button']}>
                  <Typography weight={'bold'} size={'large'}>
                    Shorten It!
                  </Typography>
                </Button>
            </form>
            <div>
              {invalidUrl &&
                <Typography className={styles['error-message']}>
                  Please add a link
                </Typography>}
            </div>
        </div>
    );
};
