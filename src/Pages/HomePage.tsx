import { MovieType } from "@/Types/type";
import { fetchMovies } from "@/api/api";
import MovieCarousel from "@/components/MovieCarousel";
import Recomended from "@/components/Recomended";
// import Footer from "@/shared/Footer";
// import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieType[] | undefined>();
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();

      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="">
      <div className="relative min-h-screen  z-0">
        <Navbar />
        <MovieCarousel movies={movies} />
        <Recomended />
        {/* <Footer /> */}
      </div>
      <div className=""></div>
    </div>
  );
};

export default HomePage;
