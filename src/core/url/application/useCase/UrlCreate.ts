import * as UrlRepositoryTs from "../../domain/UrlRepository.ts";
import { UseCase } from "../../../shared/application/useCase.ts";
import { inject, injectable } from "tsyringe";

@injectable()
export class UrlCreate implements UseCase<string, unknown> {
  constructor(
    @inject("UrlRepository") private urlRepository: UrlRepositoryTs.UrlRepository
  ) {}

  execute(url: string): Promise<void> {
    return this.urlRepository.create(url);
  }
}