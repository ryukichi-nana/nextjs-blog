import { useRouter } from "next/router";
import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const useUser = () => {
    const router = useRouter();
    const { data, error } = useSWR(
      router.query.id
        ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
        : null
      ,fetcher
    );
    return {
      data,
      error,
      isLoading: !data && !error,
    };
  };