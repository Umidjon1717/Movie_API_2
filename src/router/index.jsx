import Detail from "@/components/detail/Detail";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Saved from "@/pages/saved/Saved";
import Search from "@/pages/search/Search";
import { useRoutes } from "react-router-dom";

const Routes = ({ savedMovies }) => {
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/latest",
      element: <Latest />
    },
    {
      path: "/movie/:id",
      element: <Detail />
    },
    {
      path: "/saved",
      element: <Saved savedMovies={savedMovies} />
    },
    {
      path: "/search",
      element: <Search />
    }
  ]);
};

export default Routes;
