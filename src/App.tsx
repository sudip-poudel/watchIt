// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import StreamVideo from "./Pages/StreamVideo";
import RecentlyAdded from "./Pages/RecentlyAdded";
import SearchResults from "./Pages/SearchResults";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/movie/:name",
      element: <StreamVideo />,
    },
    {
      path: "/recentlyadded",
      element: <RecentlyAdded />,
    },
    {
      path: "/search/:query",
      element: <SearchResults />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
