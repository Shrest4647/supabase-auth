import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";


function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
