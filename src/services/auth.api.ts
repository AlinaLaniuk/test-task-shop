import { api } from "./axios";
import { LoginRequest, LoginResponse } from "@/types/auth.types";
import { AxiosError } from "axios";

export const login = async (
  data: LoginRequest
): Promise<{ data?: LoginResponse; error?: string }> => {
  try {
    const response = await api.post<LoginResponse>("/auth/login", data);
    return { data: response.data };
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    const errorMessage = axiosError.response?.data?.message || "Something went wrong";
    return { error: errorMessage };
  }
};
