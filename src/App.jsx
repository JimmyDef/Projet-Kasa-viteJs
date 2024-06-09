import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";
import Accomodation from "./pages/accomodation/Accomodation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "accomodation/:id",
        element: <Accomodation />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
