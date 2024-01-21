import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../shared/application/useCase.ts";
import * as UrlRepositoryTs from "../../domain/UrlRepository.ts";
import { ShortUrl } from "../../domain/ShortUrl.ts";

@injectable()
export class UrlGetOne implements UseCase<string, ShortUrl> {
  constructor(@inject("UrlRepository") private urlRepository: UrlRepositoryTs.UrlRepository) {}

  async execute(shortUrlKey: string): Promise<ShortUrl> {
    return this.urlRepository.get(shortUrlKey);
  }
}