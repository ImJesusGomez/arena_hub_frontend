import { RouterProvider } from "react-router";
import { router } from "./router/app.router";

export const ArenaHub = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
