import { UrlRepository } from "../../domain/UrlRepository.ts";
import * as axios_1 from "axios";
import { ShortUrl } from "../../domain/ShortUrl.ts";
import { inject, injectable } from "tsyringe";
import { Url } from "../../domain/Url.ts";

@injectable()
export class AxiosUrlRepository implements UrlRepository {
  constructor(@inject("AxiosInstance") private axios: axios_1.AxiosInstance) {}

  async create(url: string): Promise<void> {
    const payload = new Url(url);
    return await this.axios.post('/url', payload);
  }

  async delete(id: string): Promise<ShortUrl> {
    return await this.axios.delete('/url/'+id);
  }

  async get(shortUrlKey: string): Promise<ShortUrl> {
    return await this.axios.get('/url/'+shortUrlKey);
  }

  async getAll(): Promise<ShortUrl[]> {
    return await this.axios.get('/url');
  }

  async getByUrl(url: string): Promise<ShortUrl> {
    return await this.axios.get('/url/find-by-url/'+encodeURIComponent(url))
  }
}