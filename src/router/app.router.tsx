import { HomePage } from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HomePage />,
  },
]);
