import { create } from "zustand";

interface ErrorState {
  message: string | null;
  setError: (msg: string | null) => void;
}

export const useErrorStore = create<ErrorState>((set) => ({
  message: null,
  setError: (msg) => set({ message: msg }),
}));
