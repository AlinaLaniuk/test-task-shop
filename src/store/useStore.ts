import { LoginResponse } from "@/types/auth.types";
import { create } from "zustand";

interface UserState {
  user: LoginResponse | null;
  setUser: (user: LoginResponse) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    set({ user: null });
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
  },
}));
