export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type SeriesType = {
  backdrop_path: string;
  first_air_date: string; // Assuming it's a movie, not a TV show (adjust if needed)
  genre_ids: number[]; // Array of genre IDs
  id: number;
  name: string;
  origin_country: string[]; // Array of ISO 3166-1 country codes
  original_language: string; // ISO 639-1 language code
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type MovieResultType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type GenreType = {
  id: number;
  name: string;
};

export type ProductionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type ProductionCountryType = {
  iso_3166_1?: string;
  name: string;
};
export type SponkenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type CreatorType = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

export type NetworkType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type SeasonType = {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: number | null;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SponkenLanguageType[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type SeriesDetailsType = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatorType[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreType[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeType;
  name: string;
  next_episode_to_air: EpisodeType;
  networks: NetworkType[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  seasons: SeasonType[];
  spoken_languages: SponkenLanguageType[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type MovieCastType = {
  id: number;
  cast: ActorType[];
  crew: CrewMemberType[];
};

export type ActorType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type CrewMemberType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type SearchResultsType = {
  page: number;
  results: SearchedVideoType[];
  total_pages: number;
  total_results: number;
};

export type SearchedVideoType = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};
