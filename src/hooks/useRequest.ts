import { useEffect, useState } from "react";

interface RequestState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useRequest<T>(request: () => Promise<T>) {
  const [state, setState] = useState<RequestState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request();

        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: "Something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  return state;
}
