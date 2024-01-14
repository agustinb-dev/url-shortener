import { container } from "tsyringe";
import * as axios from "axios";
import { AxiosInstance } from "../Axios/instance.ts";
import { UrlRepository } from "../../../url/domain/UrlRepository.ts";
import { AxiosUrlRepository } from "../../../url/infrastructure/repository/AxiosUrlRepository.ts";

export function buildContainer() {
  container.register<axios.AxiosInstance>('AxiosInstance', {
    useValue: AxiosInstance,
  })

  // Implementation
  axiosImplementation();
}

function axiosImplementation() {
  container.register<UrlRepository>('UrlRepository', {
    useClass: AxiosUrlRepository,
  });
}