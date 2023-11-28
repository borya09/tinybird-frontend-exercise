type FetcherProps = {
  endpoint: string;
  headers?: Record<string, string>;
};

const fetcher = async <T>({ endpoint, headers }: FetcherProps): Promise<T> => {
  const response = await fetch(endpoint, {
    headers,
    method: "GET",
  });

  if (!response.ok) {
    const errorResponse = (await response.json()) as { error: string };
    throw new Error(errorResponse.error);
  }
  return await response.json();
};

export default fetcher;
