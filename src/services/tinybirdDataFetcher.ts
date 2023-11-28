import { TinybirdApiQueryResult } from "../models/TinybirdApiQueryResult";
import fetcher from "./fetcher";

const baseUrl = import.meta.env.VITE_TINYBIRD_BASE_URL;
const bearerToken = import.meta.env.VITE_TINYBIRD_BEARER_TOKEN;

const tinybirdDataFetcher = async <T>(
  pipe: string,
  q?: string
): Promise<TinybirdApiQueryResult<T>> => {
  const query = q ? `?q=${q}` : "";
  const data = await fetcher<TinybirdApiQueryResult<T>>({
    endpoint: `${baseUrl}${pipe}${query}`,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  return data;
};

export default tinybirdDataFetcher;
