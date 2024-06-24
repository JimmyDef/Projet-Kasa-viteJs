import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";
import Accomodation from "./pages/accomodation/Accomodation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Add the following line to import the declaration file

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
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
