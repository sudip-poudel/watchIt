import { TrendingDataType } from "@/Types/type";
import { fetchTrendingData } from "@/api/api";
import { Button } from "@/components/ui/button";
import { PlaySquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SidebarProps = {
  variant: string;
};

const Sidebar = ({ variant }: SidebarProps) => {
  const [sidebarData, setSidebarData] = useState<TrendingDataType[]>();
  const [trendingTime, setTrendingTime] = useState<"day" | "week">("day");
  useEffect(() => {
    const fetchData = async () => {
      if (variant.toLowerCase() === "trending") {
        const trendingData = await fetchTrendingData(trendingTime);
        setSidebarData(trendingData);
      }
    };
    fetchData();
  }, [variant, trendingTime]);
  return (
    <div className="flex flex-col  w-full  mr-5">
      <div>
        <div className="flex  gap-3 flex-row  items-center justify-start">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <PlaySquare /> {variant}
          </h2>
          {variant.toLowerCase() === "trending" && (
            <div className="flex flex-row gap-3 items-center text-secondary">
              <Button
                onClick={() => setTrendingTime("day")}
                variant={"outline"}
                className={`bg-transparent ${
                  trendingTime === "day"
                    ? "border-primary text-primary"
                    : "border-secondary"
                }  w-16 mt-2 h-6 hover:border-primary hover:text-primary hover:bg-transparent`}
              >
                Day
              </Button>
              <Button
                onClick={() => setTrendingTime("week")}
                variant={"outline"}
                className={`bg-transparent ${
                  trendingTime === "week"
                    ? "border-primary text-primary"
                    : "border-secondary"
                }   w-16 mt-2 h-6 hover:border-primary hover:text-primary hover:bg-transparent`}
              >
                Week
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {sidebarData?.map((video, i) => {
          return (
            i < 9 && (
              <Link
                to={
                  video.media_type === "movie"
                    ? `/movie/${video.id}`
                    : `/tv/${video.id}/1-1`
                }
                className="group "
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 * i, duration: 0.6 }}
                  className="flex flex-row justify-start items-center h-24 rounded-2xl bg-black pl-2 group-hover:bg-primary transition-all duration-500"
                >
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/original${
                      video.poster_path
                    }`}
                    alt="poster"
                    className="w-16 h-20 "
                  />
                  <div className="ml-2 flex flex-col">
                    {video.media_type === "movie" && (
                      <div className="text-secondary text-sm flex flex-row gap-2 group-hover:text-black">
                        <p>Movie /</p>
                        <p>
                          {video.media_type === "movie" &&
                            video.release_date?.split("-")[0]}
                        </p>
                      </div>
                    )}
                    {video.media_type === "tv" && (
                      <div className="text-secondary text-sm flex flex-row gap-2 group-hover:text-black">
                        <p>TV /</p>
                        <p>
                          {video.media_type === "tv" &&
                            video.first_air_date?.split("-")[0]}
                        </p>
                      </div>
                    )}
                    <p className=" w-64 text-white overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-black">
                      {video.media_type === "movie" ? video.title : video.name}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
