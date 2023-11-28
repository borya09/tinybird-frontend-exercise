import { useEffect, useState } from "react";
import tinybirdDataFetcher from "../../../services/tinybirdDataFetcher";

const pipe = "yellow_tripdata_2017_pipe.json";

export default function useFetchYellowTripData<T>(query: string) {
  const [data, setData] = useState<T[] | undefined>();
  const [error, setError] = useState<Error | null | undefined>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchYellowTripData = async (query: string) => {
      setLoading(true);
      try {
        const result = await tinybirdDataFetcher<T>(pipe, query);
        setData(result.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchYellowTripData(query);
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}
