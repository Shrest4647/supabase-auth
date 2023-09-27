import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "./pages";
import AuthLayout from "./components/layout/auth-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { supabase } from "./lib/supabase/client";
import { authStore, User } from "./store/auth";
import ForgotPassword from "./pages/auth/forgot-password";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      const authState = authStore.getState().authState;
      if (!authState.isLoggedIn) {
        throw redirect("/auth/login");
      }
      return authState;
    },
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    loader: () => {
      const authState = authStore.getState().authState;
      if (authState.isLoggedIn) {
        return redirect("/");
      }
      return authState;
    },
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login/post",
        action: async ({ request }) => {
          const login = authStore.getState().login;
          const formData = await request.formData();
          const email = formData.get("email").toString();
          const password = formData.get("password").toString();

          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });

          if (error) throw redirect("/auth/login");
          const user: User = {
            id: data.user.id,
            email: data.user.email,
          };
          login(user);
          localStorage.setItem("session", JSON.stringify(data));
          return redirect("/");
        },
      },
      {
        path: "/auth/register/post",
        action: async ({ request }) => {
          const login = authStore.getState().login;
          const formData = await request.formData();
          const email = formData.get("email").toString();
          const username = formData.get("username").toString();
          const password = formData.get("password").toString();

          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });
          if (error) throw redirect("/auth/login");
          const user: User = {
            id: data.user.id,
            email: data.user.email,
            username,
          };
          login(user);
          console.log(data);
          localStorage.setItem("session", JSON.stringify(data));
          return redirect("/");
        },
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/forgot-password/post",
        element: (
          <div>
            <h1> Check your email for reset Link</h1>
          </div>
        ),
        action: async ({ request }) => {
          const formData = await request.formData();
          const email = formData.get("email").toString();

          const res = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/login`,
          });
          console.log(res);
          if (res.error) throw redirect("/auth/login");
          return null;
        },
      },
    ],
  },
]);
