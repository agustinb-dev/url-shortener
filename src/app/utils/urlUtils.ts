import { ShortUrl } from "../../core/url/domain/ShortUrl.ts";

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export const createShortUrlLink = (shortUrl: ShortUrl): string => {
  return window.location.origin+'/'+shortUrl.shortUrlKey
}