import styles from './ShortUrlBox.module.scss'
import { Button, Typography } from "../../atoms";
import { ShortUrl } from "../../../../core/url/domain/ShortUrl.ts";
import { createShortUrlLink } from "../../../utils/urlUtils.ts";
import { useState } from "react";

interface ShortUrlBoxProperties {
  shortUrl: ShortUrl | undefined;
}

export function ShortUrlBox(properties: ShortUrlBoxProperties) {
  const [isCopied, setIsCopied] = useState(false);

  const shortUrl = properties.shortUrl && createShortUrlLink(properties.shortUrl)

  const copyButtonOnCLick = () => {
    if(shortUrl) {
      void navigator.clipboard.writeText(shortUrl);
      setIsCopied(true);
    }
  }

  return(
      properties.shortUrl &&
      <div className={styles['short-url-box']}>
        <div className={styles['normal-url']}>
          <Typography size={'normal'} weight={"medium"}>
            {properties.shortUrl.url}
          </Typography>
        </div>
        <div className={styles['short-url-link-container']}>
          <a href={shortUrl}>
            <Typography size={"normal"} weight={"medium"}>
              {shortUrl}
            </Typography>
          </a>
          <Button className={isCopied ? styles['copied-button'] : styles['copy-button']} onClick={() => copyButtonOnCLick()}>
            <Typography size={'small'}>
              {isCopied ? 'Copied!' : 'Copy'}
            </Typography>
          </Button>
        </div>
      </div>
  )
}