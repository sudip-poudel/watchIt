const Footer = () => {
  return (
    <div className="relative w-full mt-2 ">
      <div className=" ">
        <img
          src="/images/footer.jpg"
          alt="footer"
          className="relative h-80 w-full object-cover z-0"
        />
        <div className="text-center absolute bottom-3 text-secondary w-full">
          <hr className="mb-2 border-primary" />
          <p className="px-2 text-xs">
            WatchIt is top of free streaming website, where to watch movies
            online free without registration required. With a big database and
            great features, we're confident FMovies is the best free movies
            online website in the space that you can't simply miss!
          </p>
          <p className="text-primary text-sm">
            DCMA Notice:This site does not store any files on our server, we
            only linked to the media which is hosted on 3rd party services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
