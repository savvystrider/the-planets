import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

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
