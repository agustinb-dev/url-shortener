import { container } from "tsyringe";
import { UrlCreate } from "../useCase/UrlCreate.ts";
import { UrlGetOne } from "../useCase/UrlGetOne.ts";
import { UrlGetOneByUrl } from "../useCase/UrlGetOneByUrl.ts";
import { AxiosError } from "axios";
export function useUrl() {
  // SERVICES
  const urlCreate = container.resolve(UrlCreate);
  const urlGetOne = container.resolve(UrlGetOne);
  const urlGetOneByUrl = container.resolve(UrlGetOneByUrl);

  const createUrl = async (url: string) => {
    try {
      await urlCreate.execute(url);
    }
    catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        return
      }
      console.log(error);
    }
  }

  const getOneUrl = async (shortUrlKey: string) => {
    return await urlGetOne.execute(shortUrlKey);
  }

  const getOneUrlByUrl = async (url: string) => {
    try {
      return await urlGetOneByUrl.execute(url);
    }
    catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        return
      }
      console.log(error);
    }
  }

  return {
    createUrl,
    getOneUrl,
    getOneUrlByUrl
  }
}