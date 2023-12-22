import { SearchResultsType, SearchedVideoType } from "@/Types/type";
import { fetchSearchedVideos } from "@/api/api";
// import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import VideoCard from "@/shared/VideoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState<SearchResultsType>();
  const [pageNo, setPageNo] = useState("1");
  useEffect(() => {
    const fetchItems = async () => {
      if (query) {
        const searchedVideos = await fetchSearchedVideos(query, pageNo);
        setSearchResults(searchedVideos);
      }
    };
    fetchItems();
  }, [query, pageNo]);

  return (
    <>
      <Navbar />
      <h2
        className="text-2xl font-bold text-white ml-5
      "
      >
        Results For : {query}
      </h2>
      <div className="flex flex-wrap">
        {searchResults?.results.map((video: SearchedVideoType, i: number) => (
          <VideoCard movie={video} key={i} />
        ))}
      </div>
      <div className="felx flex-row ">
        <ReactPaginate
          pageCount={
            typeof searchResults?.total_pages === "number"
              ? searchResults.total_pages
              : 1
          }
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => {
            const page = e.selected + 1;
            setPageNo(page.toString());
            window.scroll({ top: 0, behavior: "smooth" });
          }}
          previousLabel="< "
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
          previousClassName=""
          activeClassName="bg-primary w-10 text-center"
          pageClassName="flex flex-row border border-gray-800 w-8 h-8 text-center items-center rounded-xl hover:bg-primary "
          containerClassName="flex flex-row items-center justify-center gap-2 text-white mb-4"
          disabledLinkClassName="text-secondary"
          pageLinkClassName="w-full"
          nextClassName="text-2xl"
          previousLinkClassName="text-2xl"
        />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SearchResults;
