import { create } from "zustand";

export type User = {
  id?: string;
  email: string;
  username?: string;
  token?: string;
};

export type AuthState = {
  user?: User;
  isLoggedIn: boolean;
};

export type State = {
  authState: AuthState;
};

export type Actions = {
  login: (user: User) => void;
  logout: () => void;
};

export const authStore = create<State & Actions>((set) => ({
  authState: {
    user: null,
    isLoggedIn: false,
  },
  login: (user: User) => {
    set((state) => {
      return {
        ...state,
        user: user,
        isLoggedIn: true,
      };
    });
  },
  logout: () => {
    set((state) => {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    });
  },
}));
