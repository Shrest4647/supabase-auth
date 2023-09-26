import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./pages";
import AuthLayout from "./components/layout/auth-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      throw redirect("/auth/login");
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
    children: [
      {
        path: "/auth/login",
        element: (
          <div className="grid grid-cols-1 gap-y-2 w-full p-4 mr-4 items-center">
              <h3 className="text-3xl font-semibold text-center">Login</h3>
            <hr/>
            <div className="form-group">
              <label className="label font-semibold">Username:</label>
              <input type="text" className="input input-accent w-full" />
            </div>
            <div className="form-group">
              <label className="label font-semibold">Password:</label>
              <input type="password" className="input input-accent w-full" />
            </div>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
