import { useEffect, useState } from "react";
import { axiosClient } from "../../config";
import * as types from "../types/hooks";

export default function useApiCall<T extends types.ApiEndpoint>(
  uri: T,
  config?: types.ApiCallConfig<T>
) {
  const [data, setData] = useState<types.ApiResponse<T>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  async function loadData() {
    setLoading(true);
    try {
      const response = await axiosClient[config?.method || "get"](uri, {
        ...config,
      });

      setData(response.data);
    } catch (err: any) {
      setError(
        err.message || "There was a problem while connecting to the server"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [uri, JSON.stringify(config)]);

  return { data, loading, error, refetch: loadData };
}
