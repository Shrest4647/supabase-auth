import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 gap-2 w-screen h-screen">
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          className="object-cover rounded"
        />
      </div>
      <div className="h-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
