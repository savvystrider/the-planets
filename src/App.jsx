import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mercury", element: <Mercury /> },
      { path: "/venus", element: <Venus /> },
      { path: "/earth", element: <Earth /> },
      { path: "/mars", element: <Mars /> },
      { path: "/jupiter", element: <Jupiter /> },
      { path: "/saturn", element: <Saturn /> },
      { path: "/uranus", element: <Uranus /> },
      { path: "/neptune", element: <Neptune /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
