import { api } from "./axios";
import { LoginRequest, LoginResponse } from "@/types/auth.types";
import { AxiosError } from "axios";

const expiresInMins = 5;

export const login = async (
  data: Omit<LoginRequest, "expiresInMins">
): Promise<{ data?: LoginResponse; error?: string }> => {
  try {
    const response = await api.post<LoginResponse>("/auth/login", { ...data, expiresInMins });
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return { data: response.data };
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    const errorMessage = axiosError.response?.data?.message || "Something went wrong";
    return { error: errorMessage };
  }
};

export const getAuthUser = async (): Promise<{ data?: LoginResponse; error?: string }> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return { data: undefined };
  try {
    const response = await api.get<LoginResponse>("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { data: response.data };
  } catch {
    const refreshResult = await refreshAuth();
    if (refreshResult.data) {
      const retry = await api.get<LoginResponse>("/auth/me", {
        headers: { Authorization: `Bearer ${refreshResult.data.accessToken}` },
      });
      return { data: retry.data };
    }
    return { error: refreshResult.error || "Not authorized" };
  }
};

export const refreshAuth = async (): Promise<{ data?: LoginResponse; error?: string }> => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return { data: undefined };
  try {
    const response = await api.post<LoginResponse>("/auth/refresh", {
      refreshToken,
      expiresInMins,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return { data: response.data };
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    const errorMessage = axiosError.response?.data?.message || "Something went wrong";
    return { error: errorMessage };
  }
};
