import { MovieType } from "@/Types/type";
import { fetchMovies } from "@/api/api";
import MovieCarousel from "@/components/MovieCarousel";
import Recomended from "@/components/Recomended";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
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
    <div className="static h-screen">
      <div className="relative h-4/5  z-0">
        <Navbar />

        <MovieCarousel movies={movies} />
      </div>
      <Recomended />
      <Footer />
    </div>
  );
};

export default HomePage;
