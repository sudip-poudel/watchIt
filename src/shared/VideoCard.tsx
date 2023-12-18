import {
  MovieDetailsType,
  MovieType,
  SeriesDetailsType,
  SeriesType,
  SearchedVideoType,
} from "@/Types/type";
import { fetchMovieDetails, fetchSeriesDetails } from "@/api/api";
import { PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  movie,
}: {
  movie: MovieType | SeriesType | SearchedVideoType;
}) => {
  const [videoDetails, setVideoDetails] = useState<
    SeriesDetailsType | MovieDetailsType
  >();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      console.log(movie);

      if ("first_air_date" in movie) {
        const seriesDetails = await fetchSeriesDetails(movie.id);
        setVideoDetails(seriesDetails);
      } else {
        console.log(movie);

        const movieDetails = await fetchMovieDetails(movie.id);
        setVideoDetails(movieDetails);
      }
    };
    fetchData();
  }, [movie]);

  if (videoDetails && "first_air_date" in videoDetails) {
    return (
      <div
        onClick={() => {
          navigate("/tv/");
        }}
        className="w-36 h-60 mt-4 ml-4 mb-8 text-secondary group"
      >
        <div className="relative">
          <img
            className="rounded-xl"
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/original${
              movie.poster_path
            }`}
            alt="poster"
          />
          <div className="opacity-0 absolute top-0 w-full h-full  rounded-xl  hover:opacity-100 flex flex-row items-center justify-center card-shadow transition-all duration-500">
            <PlayCircle color="white" />
          </div>
        </div>
        <div className="flex flex-row justify-around items-center font-medium text-[11px] mt-2">
          <p>{videoDetails.last_air_date.split("-")[0]}</p>
          <p className="border group-hover:text-primary border-secondary px-1 py-0 rounded-xl">
            SS {videoDetails.seasons.length}
          </p>
          <p>ep {videoDetails.last_episode_to_air.episode_number}</p>
        </div>
        <p className="text-start  group-hover:text-primary cursor-pointer">
          {videoDetails.name}
        </p>
      </div>
    );
  } else {
    return videoDetails ? (
      <div
        onClick={() => {
          navigate(`/movie/${videoDetails.id}`);
        }}
        className="w-36 h-60 mt-4 ml-4 mb-8 text-secondary group"
      >
        <div className="relative">
          <img
            className="rounded-xl"
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/original${
              videoDetails.poster_path
            }`}
            alt="poster"
          />
          <div className="opacity-0 absolute top-0 w-full h-full  rounded-xl  hover:opacity-100 flex flex-row items-center justify-center card-shadow transition-all duration-500">
            <PlayCircle color="white" />
          </div>
        </div>
        <div className="flex flex-row justify-around items-center text-[11px] mt-2">
          <p>{videoDetails.release_date.split("-")[0]}</p>
          <p className="border border-secondary group-hover:text-primary px-1 py-0 rounded-xl">
            MOV
          </p>
          <p>{videoDetails.runtime} min</p>
        </div>
        <p className="text-start text-sm px-1 group-hover:text-primary cursor-pointer">
          {videoDetails.title}
        </p>
      </div>
    ) : (
      <p>Loading..</p>
    );
  }
};

export default VideoCard;
