import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const usePost = (id) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
