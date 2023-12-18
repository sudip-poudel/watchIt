const WatchMovie = ({ movieId }: { movieId: number }) => {
  return (
    <div>
      <iframe src={`https://vidsrc.to/embed/movie/${movieId}`}>movie</iframe>
    </div>
  );
};

export default WatchMovie;
