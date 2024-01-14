import { container } from "tsyringe";
import { UrlCreate } from "../useCase/UrlCreate.ts";
import { UrlGetOne } from "../useCase/UrlGetOne.ts";
import { UrlGetOneByUrl } from "../useCase/UrlGetOneByUrl.ts";
export function useUrl() {
  // SERVICES
  const urlCreate = container.resolve(UrlCreate);
  const urlGetOne = container.resolve(UrlGetOne);
  const urlGetOneByUrl = container.resolve(UrlGetOneByUrl);

  const createUrl = async (url: string) => {
    await urlCreate.execute(url);
  }

  const getOneUrl = async (shortUrlKey: string) => {
    return await urlGetOne.execute(shortUrlKey);
  }

  const getOneUrlByUrl = async (url: string) => {
    return await urlGetOneByUrl.execute(url);
  }

  return {
    createUrl,
    getOneUrl,
    getOneUrlByUrl
  }
}