import { SearchResultsType, SearchedVideoType } from "@/Types/type";
import { fetchSearchedVideos } from "@/api/api";
// import Footer from "@/shared/Footer";
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
    };
    fetchItems();
  }, [query]);
  console.log(searchResults?.results);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {searchResults?.results.map((video: SearchedVideoType, i: number) => (
          <VideoCard movie={video} key={i} />
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SearchResults;
