import type { User } from "@/interfaces/entities/user.entity";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  tokenType: string | null;

  login: (accessToken: string, token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      tokenType: null,

      login: (accessToken, tokenType, user) =>
        set({
          accessToken,
          tokenType,
          user,
        }),

      logout: () =>
        set({
          accessToken: null,
          tokenType: null,
          user: null,
        }),

      isAuthenticated: () => {
        return !!get().accessToken;
      },
    }),
    {
      name: "arenahub-auth",
    },
  ),
);
