import {
  GenreType,
  MovieCastType,
  MovieDetailsType,
  SearchResultsType,
  SeriesDetailsType,
} from "@/Types/type";
import axios from "axios";

const getOptions = (url: string) => ({
  method: "GET",
  url: `${import.meta.env.VITE_TMDB_API_URL}${url}`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTHTOKEN}`,
  },
});

const fetchMovies = async () => {
  const options = getOptions(
    "/discover/movie?include_adult=false&include_video=true&page=1&sort_by=popularity.desc"
  );
  try {
    const movies = await axios.request(options);

    return movies.data;
  } catch (error) {
    throw new Error();
  }
};
const fetchSeries = async () => {
  const options = getOptions(
    "/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  const result = await axios.request(options);

  return result.data;
};
const fetchMovieGenres = async (genreId: number[]) => {
  const options = getOptions("/genre/movie/list?language=en");
  const genreList: string[] = [];

  try {
    const result = (await axios.request(options)).data;

    result?.genres.map((genre: GenreType) => {
      for (let i = 0; i < genreId.length; i++) {
        if (genre.id === genreId[i]) {
          genreList.push(genre.name);
        }
      }
    });
    return genreList;
  } catch (error) {
    throw new Error();
  }
};

const fetchMovieDetails = async (movieId: number) => {
  const options = getOptions(`/movie/${movieId}?language=en-US`);
  try {
    const result = await axios.request(options);
    const movieDetail: MovieDetailsType = result.data;

    return movieDetail;
  } catch (error) {
    console.log(error);

    throw new Error();
  }
};
const fetchSeriesDetails = async (seriesId: number) => {
  const options = getOptions(`/tv/${seriesId}?language=en-US`);
  try {
    const result = await axios.request(options);
    const movieDetail: SeriesDetailsType = result.data;

    return movieDetail;
  } catch (error) {
    throw new Error();
  }
};

const fetchMovieCast = async (movieId: number) => {
  const options = getOptions(`/movie/${movieId}/credits`);
  try {
    const result = await axios.request(options);
    const castData: MovieCastType = result.data;
    return castData;
  } catch (error) {
    throw new Error();
  }
};

const fetchSearchedVideos = async (query) => {
  const options = getOptions(
    `/search/multi?query=${query}&include_adult=true&page=1`
  );

  const data = await axios.request(options);
  const result: SearchResultsType = data.data;
  console.log(result);
  return result;
};

export {
  fetchMovies,
  fetchMovieGenres,
  fetchMovieDetails,
  fetchSeries,
  fetchSeriesDetails,
  fetchMovieCast,
  fetchSearchedVideos,
};
