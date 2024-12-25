import React from "react";
import Router from "./router";
import Movies from "./components/movies/Movies";
import Snowfall from 'react-snowfall';
function App() {
  return (
    <>
      <Router/>
      <Snowfall snowflakeCount={40} />
    </>
  );
}

export default App;
