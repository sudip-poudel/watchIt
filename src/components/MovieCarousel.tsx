import { useEffect, useState } from "react";
import { GenreType, MovieDetailsType, MovieType } from "@/Types/type";
import { Bookmark, PlayCircle, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

import { fetchMovieDetails } from "@/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const MovieDetails = ({ movie }: { movie: MovieType }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  useEffect(() => {
    const fetch = async () => {
      const mvdetail = await fetchMovieDetails(movie.id);
      setMovieDetails(mvdetail);
    };
    fetch();
  }, [movie]);

  return (
    <div className="text-center md:text-start flex flex-col justify-center items-center md:items-start w-full absolute top-2/3 pl-8 h-min max-h-32">
      <p className=" text-white text-3xl font-bold pb-2">{movie.title}</p>
      <div className="text-white flex gap-3 pb-1.5 flex-col md:flex-row">
        <div className="flex flex-row justify-center gap-2">
          <p>{movieDetails?.release_date.split("-")[0]}</p>
          <p className="flex items-center gap-1 ">
            <Star width={18} height={18} />
            {movieDetails && movieDetails.vote_average.toFixed(1)}
          </p>
          <p>{movieDetails?.runtime} min</p>
        </div>
        <div className="flex flex-row gap-2">
          {movieDetails &&
            movieDetails?.genres.map((genre: GenreType, i: number) => (
              <p key={i}>{genre.name}</p>
            ))}
        </div>
      </div>
      <p className="hidden lg:block text-secondary w-3/4 h-[6rem]">
        {movieDetails?.overview}
      </p>
      <div className="flex pt-4 gap-8">
        <Button className="rounded-2xl w-36 h-12" asChild>
          <Link to={`/movie/${movieDetails?.id}`}>
            <PlayCircle className="mr-2" />
            WatchNow
          </Link>
        </Button>
        <Button className="bg-transparent w-36 h-12 text-white hover:text-primary font-bold text-[1.1rem] hover:bg-transparent">
          <Bookmark className="mr-2" />
          Bookmark
        </Button>
      </div>
    </div>
  );
};

const MovieCarousel = ({ movies }: { movies: MovieType[] | undefined }) => {
  console.log(movies);

  return (
    <div>
      <Swiper
        className="w-full absolute top-0 left-0 -z-10 h-4/5"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {movies?.map((movie, i) =>
          movies && i < 9 ? (
            <SwiperSlide key={i}>
              <img
                src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w1280${
                  movie.backdrop_path
                }`}
                alt="logo"
                className="w-full object-cover h-full relative"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-gradient">
                <MovieDetails movie={movie} />
              </div>
            </SwiperSlide>
          ) : (
            ""
          )
        )}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
