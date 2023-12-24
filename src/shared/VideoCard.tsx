import {
  MovieDetailsType,
  MovieType,
  SeriesDetailsType,
  SeriesType,
  SearchedVideoType,
} from "@/Types/type";
import { fetchMovieDetails, fetchSeriesDetails } from "@/api/api";
import { motion } from "framer-motion";
import { Loader, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  movie,
}: {
  movie: MovieType | SeriesType | SearchedVideoType;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoDetails, setVideoDetails] = useState<
    SeriesDetailsType | MovieDetailsType
  >();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if ("first_air_date" in movie) {
        setIsLoading(true);
        const seriesDetails = await fetchSeriesDetails(movie.id);
        setVideoDetails(seriesDetails);
        setIsLoading(false);
      } else {
        setIsLoading(true);

        const movieDetails = await fetchMovieDetails(movie.id);
        setVideoDetails(movieDetails);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movie]);

  if (videoDetails && "first_air_date" in videoDetails) {
    return isLoading ? (
      <p className="w-36 h-60 mt-4 ml-4 mb-8 flex flex-row justify-center items-center">
        <Loader />
      </p>
    ) : (
      videoDetails && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 2 }}
          onClick={() => {
            navigate(`/tv/${videoDetails.id}/1-1`);
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
            <p>{videoDetails?.first_air_date.split("-")[0]}</p>
            <p className="border group-hover:text-primary border-secondary px-1 py-0 rounded-xl">
              SS {videoDetails.seasons.length}
            </p>
            <p>
              ep{" "}
              {videoDetails.last_episode_to_air &&
                videoDetails.last_episode_to_air.episode_number}
            </p>
          </div>
          <p className="text-start text-ellipsis overflow-hidden whitespace-nowrap group-hover:text-primary cursor-pointer">
            {videoDetails.name}
          </p>
        </motion.div>
      )
    );
  } else {
    return isLoading ? (
      <p className="w-36 h-60 mt-4 ml-4 mb-8 flex flex-row justify-center items-center text-black">
        <Loader />
      </p>
    ) : (
      videoDetails && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 2 }}
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
            <p>{videoDetails?.release_date.split("-")[0]}</p>
            <p className="border border-secondary group-hover:text-primary px-1 py-0 rounded-xl">
              MOV
            </p>
            <p>{videoDetails.runtime} min</p>
          </div>
          <p className="text-start text-ellipsis overflow-hidden whitespace-nowrap text-sm px-1 group-hover:text-primary cursor-pointer">
            {videoDetails.title}
          </p>
        </motion.div>
      )
    );
  }
};

export default VideoCard;
