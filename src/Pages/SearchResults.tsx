import { SearchResultsType, SearchedVideoType } from "@/Types/type";
import { fetchSearchedVideos } from "@/api/api";
import Navbar from "@/shared/Navbar";
import VideoCard from "@/shared/VideoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState<SearchResultsType>();
  useEffect(() => {
    const fetchItems = async () => {
      const searchedVideos = await fetchSearchedVideos(query);
      setSearchResults(searchedVideos);
      console.log(searchResults);
    };
    fetchItems();
  }, [query]);
  console.log(
    searchResults?.results.filter((video) => video.media_type === "movie")
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {searchResults?.results
          .filter((video) => video.media_type === "movie")
          .map((video: SearchedVideoType, i: number) => (
            <VideoCard movie={video} key={i} />
          ))}
      </div>
    </>
  );
};

export default SearchResults;
