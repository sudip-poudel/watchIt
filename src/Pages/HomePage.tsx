import { MovieType } from "@/Types/type";
import { fetchMovies } from "@/api/api";
import MovieCarousel from "@/components/MovieCarousel";
import Recomended from "@/components/Recomended";
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
  console.log(movies);

  return (
    <>
      <div>
        <Navbar />
        <MovieCarousel movies={movies} />
      </div>
      <Recomended />
    </>
  );
};

export default HomePage;
