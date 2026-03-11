import { getAuthUser } from "@/services/auth.api";
import { useRequest } from "./useRequest";

export default function useAuth() {
  return useRequest(async () => {
    const result = await getAuthUser();

    if (result.data) return result.data;

    throw new Error(result.error);
  });
}
