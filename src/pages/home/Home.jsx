import React, { useEffect, useState } from "react";
import Movies from "@/components/movies/Movies";
import { request } from "@/api";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    request("/discover/movie").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      <Header/>
      <main className="mt-8 w-full max-w-4xl px-4">
        
        <Movies data={data} />
        <div className="mt-8 flex justify-center">
          
        </div>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default Home;
