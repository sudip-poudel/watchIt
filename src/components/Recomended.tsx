import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MovieType, SeriesType } from "@/Types/type";
import { fetchMovies, fetchSeries } from "@/api/api";
import VideoCard from "@/shared/VideoCard";
import Sidebar from "@/shared/Sidebar";

const Recomended = () => {
  const [active, setActive] = useState<string>("movies");
  const [availableMovies, setAvailableMovies] = useState<
    MovieType[] | SeriesType[]
  >();
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
    if (active == "movies") {
      const fetchMoviesItem = async () => {
        setIsLoading(true);
        const response = await fetchMovies();
        setAvailableMovies(response.results);
        setIsLoading(false);
      };
      fetchMoviesItem();
    }
    if (active == "series") {
      const fetchMoviesItem = async () => {
        setIsLoading(true);
        const response = await fetchSeries();
        setAvailableMovies(response.results);
        setIsLoading(false);
      };
      fetchMoviesItem();
    }
  }, [active]);
  //   const [availableSeries, setAvailableSeries] = useState<>();
  const handelMoviesClick = () => {
    setActive("movies");
  };
  const handelSeriesClick = () => {
    setActive("series");
  };
  return (
    <div className="absolute top-[80%] w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-3/4 ">
          <div className="flex flex-col gap-3 items-center justify-center lg:flex-row lg:justify-start">
            <h2 className="text-white text-2xl font-bold pl-3 pt-2">
              Recommended
            </h2>
            <div className="flex flex-row gap-3 items-center text-secondary">
              <Button
                onClick={handelMoviesClick}
                variant={"outline"}
                className={`bg-transparent ${
                  active == "movies"
                    ? "border-primary text-primary"
                    : "border-secondary"
                }  w-24 mt-2 h-8 hover:border-primary hover:text-primary hover:bg-transparent`}
              >
                Movies
              </Button>
              <Button
                onClick={handelSeriesClick}
                variant={"outline"}
                className={`bg-transparent ${
                  active == "series"
                    ? "border-primary text-primary"
                    : "border-secondary"
                }   w-24 mt-2 h-8 hover:border-primary hover:text-primary hover:bg-transparent`}
              >
                Series
              </Button>
            </div>
          </div>
          <div className="flex justify-center flex-wrap w-full  lg:justify-start flex-row gap-2">
            {availableMovies?.map(
              (movie: MovieType | SeriesType, i: number) => (
                <VideoCard movie={movie} key={i} />
              )
            )}
          </div>
        </div>
        <div className="w-full mt-3 lg:w-1/4">
          <Sidebar variant="Trending" />
        </div>
      </div>
    </div>
  );
};

export default Recomended;
