import Detail from "@/components/detail/Detail";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Saved from "@/pages/saved/Saved";
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
    }
  ]);
};

export default Routes;
