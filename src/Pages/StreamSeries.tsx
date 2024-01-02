import { SeasonType, SeriesCreditsType, SeriesDetailsType } from "@/Types/type";
import {
  fetchSeasonDetails,
  fetchSeriesCast,
  fetchSeriesDetails,
} from "@/api/api";
import Navbar from "@/shared/Navbar";
import { PlaySquare, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ParamsType = {
  seriesId?: string;
  ssep?: string;
};
type SeasonEpType = {
  seasonNo: number;
  epNo: number;
};

const StreamSeries = () => {
  const location = useLocation();
  console.log(location);

  const [seriesDetails, setSeriesDetails] = useState<SeriesDetailsType>();
  const [seriesCast, setSeriesCast] = useState<SeriesCreditsType>();
  const [seasonDetails, setSeasonDetails] = useState<SeasonType>();
  const { seriesId, ssep }: ParamsType = useParams();
  const [seasonep, setSeasonEp] = useState<SeasonEpType>();
  useEffect(() => {
    const fetchseriesData = async () => {
      if (ssep && seriesId) {
        const id = parseInt(seriesId);
        const seasonNo = parseInt(ssep.split("-")[0]);
        const epNo = parseInt(ssep.split("-")[1]);
        setSeasonEp({ seasonNo, epNo });
        const seriesData = await fetchSeriesDetails(id);
        const castData = await fetchSeriesCast(id);
        setSeriesDetails(seriesData);

        setSeriesCast(castData);
      }
    };
    fetchseriesData();
  }, [seriesId, ssep]);
  // console.log(
  //   seriesCast?.cast.filter((cast) => cast.known_for_department == "Acting")
  // );

  useEffect(() => {
    const handleSeasonChange = async () => {
      if (seriesId && seasonep?.seasonNo) {
        const sno = `${seasonep.seasonNo}`;

        const seasonDetails = await fetchSeasonDetails(seriesId, sno);
        setSeasonDetails(seasonDetails);
      }
    };
    handleSeasonChange();
  }, [seriesId, seasonep]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center">
        <iframe
          width={200}
          src={`https://vidsrc.to/embed/tv/${seriesId}/${seasonep?.seasonNo}/${seasonep?.epNo}`}
          className="aspect-video w-3/4  bg-black"
          allowFullScreen
        >
          series
        </iframe>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row h-max">
        <div className="flex gap-6 flex-row  ml-4 w-full md:w-3/4 mb-8 relative md:static">
          <img
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/original/${
              seriesDetails?.poster_path
            }`}
            className="w-full h-[32rem] md:h-auto object-cover md:w-64 rounded-xl  md:static"
          />
          <div className="flex flex-col justify-center gap-1 absolute md:static bg-gradient h-full md:bg-none">
            <h1 className="text-white font-bold text-3xl">
              {seriesDetails?.name}
            </h1>
            <div className="">
              <div className="flex flex-row  gap-2 text-white">
                <p>
                  {seriesDetails?.last_air_date &&
                    seriesDetails?.last_air_date.split("-")[0]}
                </p>
                <p className="flex items-center gap-1 ">
                  <Star width={18} height={18} />
                  {seriesDetails && seriesDetails.vote_average.toFixed(1)}
                </p>
                <p>{seriesDetails?.seasons.length} min</p>
              </div>
            </div>
            <p className="text-secondary my-2 hidden max-w-[50%]  sm:block">
              {seriesDetails?.overview}
            </p>
            <div className="flex flex-row text-secondary">
              <span className="text-white w-32 ">Genres: </span>
              <div className="flex flex-row gap-3">
                {seriesDetails?.genres.map((genre, i) => (
                  <p key={i}>{genre.name},</p>
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Country: </span>
              <p className="text-secondary">
                {seriesDetails?.production_countries.map(
                  (country) => country.name
                )}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Release Date: </span>
              <p className="text-secondary">{seriesDetails?.first_air_date}</p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">TotalEpsodes: </span>
              <p className="text-secondary">
                {seriesDetails?.number_of_episodes} min
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Director: </span>
              <div className="text-secondary flex ">
                {seriesCast?.crew
                  .filter((crew) =>
                    crew.jobs.filter((job) => job.job === "Director")
                  )
                  .map((cast, i) => (
                    <p className="mr-[3px]" key={i}>
                      {i < 4 && cast.name}
                      {i < 3 && ", "}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Porduction: </span>
              <p className="text-secondary">
                {seriesDetails?.production_companies.map(
                  (company) => company.name
                )}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Cast: </span>
              <p className="text-secondary flex flex-row ">
                {seriesCast?.cast
                  .filter((cast) => cast.known_for_department == "Acting")
                  .map((cast, i) => i < 4 && <p key={i}>{cast.name}</p>)}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="text-white w-32">Budget: </span>
              <p className="text-secondary">$ {"test"} </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col justify-center bg-black px-4 py-2 mr-2 rounded-lg">
          {seasonep?.seasonNo && (
            <Select
              onValueChange={(e) => {
                const ssep = { ...seasonep, seasonNo: +e };
                setSeasonEp(ssep);
              }}
              // className="text-white text-2xl font-bold flex justify-center items-center flex-row gap-2"
              defaultValue={`${seasonep?.seasonNo && seasonep.seasonNo}`}
            >
              <SelectTrigger className="w-[180px] bg-transparent text-white">
                <PlaySquare width={20} height={20} className="text-primary" />
                <SelectValue placeholder="Choose Season" />
              </SelectTrigger>
              {
                <SelectContent>
                  {seriesDetails?.seasons
                    .filter((seasons) => seasons.season_number !== 0)
                    .map((season, i) => (
                      <SelectItem value={`${i + 1}`} key={i}>
                        {season.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              }
            </Select>
          )}
          <div className="text-white flex flex-col gap-1 h-96 overflow-scroll no-scrollbar mt-2">
            {seasonDetails?.episodes
              ?.filter((seasons) => seasons.season_number !== 0)
              .map((episode, i) => (
                <Link
                  to={`/tv/${seriesId}/${episode.season_number}-${episode.episode_number}`}
                  key={i}
                  className={
                    location.pathname ==
                    `/tv/${seriesId}/${episode.season_number}-${episode.episode_number}`
                      ? "bg-primary  py-2 px-2 rounded-lg"
                      : "bg-[#181818]  py-2 px-2 rounded-lg"
                  }
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <p className="">
                    Episode {i + 1}: {episode.name}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamSeries;
