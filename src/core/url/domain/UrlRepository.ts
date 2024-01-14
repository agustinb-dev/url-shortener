import { ShortUrl } from "./ShortUrl.ts";

export interface UrlRepository {
  create(url: string): Promise<void>
  getAll(): Promise<ShortUrl[]>
  get(shortUrlKey: string): Promise<ShortUrl>
  getByUrl(url: string): Promise<ShortUrl>
  delete(id: string): Promise<ShortUrl>
}