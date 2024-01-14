import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../shared/application/useCase.ts";
import * as UrlRepositoryTs from "../../domain/UrlRepository.ts";
import { ShortUrl } from "../../domain/ShortUrl.ts";

@injectable()
export class UrlGetOneByUrl implements UseCase<string, ShortUrl> {
  constructor(@inject("UrlRepository") private urlRepository: UrlRepositoryTs.UrlRepository) {}

  async execute(url: string): Promise<ShortUrl> {
    return this.urlRepository.getByUrl(url);
  }
}