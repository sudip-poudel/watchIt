import { MovieCastType, MovieDetailsType } from "@/Types/type";
import { fetchMovieCast, fetchMovieDetails } from "@/api/api";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { PlaySquare, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StreamVideo = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const [movieCast, setMovieCast] = useState<MovieCastType>();
  const params = useParams();
  const movieId = params.name;
  useEffect(() => {
    const fetchMovieData = async () => {
      if (movieId) {
        const id = parseInt(movieId);
        const movieData = await fetchMovieDetails(id);
        const castData = await fetchMovieCast(id);
        setMovieDetails(movieData);
        setMovieCast(castData);
      }
    };
    fetchMovieData();
  }, [movieId]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center">
        <iframe
          width={200}
          src={`${import.meta.env.VITE_HOST_URL}/movie/${movieId}`}
          className="aspect-video w-3/4  bg-black"
          allowFullScreen
        >
          movie
        </iframe>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <div className="flex gap-6 flex-row lg:ml-4 w-full lg:w-3/4 mb-8 relative md:static">
          <img
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/original/${
              movieDetails?.poster_path
            }`}
            className="w-full h-[32rem] md:h-auto object-cover md:w-64 rounded-xl  md:static"
          />
          <div className="flex flex-col justify-center  pl-2 gap-1 absolute md:static bg-gradient h-full w-full   md:bg-none">
            <h1 className="text-white font-bold text-3xl">
              {movieDetails?.title}
            </h1>
            <div className="">
              <div className="flex flex-row  gap-2 text-white">
                <p>{movieDetails?.release_date.split("-")[0]}</p>
                <p className="flex items-center gap-1 ">
                  <Star width={18} height={18} />
                  {movieDetails && movieDetails.vote_average.toFixed(1)}
                </p>
                <p>{movieDetails?.runtime} min</p>
              </div>
            </div>
            <p className="text-secondary my-2 hidden sm:block">
              {movieDetails?.overview}
            </p>
            <div className="flex flex-row text-secondary">
              <span className="text-white w-32 ">Genres: </span>
              <div className="flex flex-row gap-3">
                {movieDetails?.genres.map((genre, i) => (
                  <p key={i}>
                    {genre.name}
                    {i < movieDetails?.genres.length - 1 && ","}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Country: </span>
              <p className="text-secondary">
                {movieDetails?.production_countries.map(
                  (country) => country.name
                )}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Release Date: </span>
              <p className="text-secondary">{movieDetails?.release_date}</p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Runtime: </span>
              <p className="text-secondary">{movieDetails?.runtime} min</p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Director: </span>
              <p className="text-secondary">
                {movieCast?.crew
                  .filter((crew) => crew.job === "Director")
                  .map((cast, i) => (
                    <p key={i}>{cast.name}</p>
                  ))}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Porduction: </span>
              <div className="text-secondary flex flex-row gap-1">
                {movieDetails?.production_companies.map(
                  (company, i) =>
                    i < 3 && (
                      <p key={i}>
                        {company.name}
                        {i < 2 && ","}
                      </p>
                    )
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Cast: </span>
              <div className="text-secondary flex flex-row gap-1">
                {movieCast?.cast
                  .filter((cast) => cast.known_for_department == "Acting")
                  .map(
                    (cast, i) =>
                      i < 3 && (
                        <p key={i}>
                          {cast.name} {i < 2 && ","}
                        </p>
                      )
                  )}
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Budget: </span>
              <p className="text-secondary">$ {movieDetails?.budget} </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold flex justify-center items-center flex-row gap-2">
            <PlaySquare /> Movie Files:
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StreamVideo;
