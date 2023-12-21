const Footer = () => {
  return (
    <div className="  w-full bg-black relative h-12">
      <div className="absolute bottom-0">
        <img src="/images/footer.jpg" alt="footer" className="z-0" />
        <p className="bg-white absolute bottom-0 z-10 text-center">
          DCMA Notice:This site does not store any files on our server, we only
          linked to the media which is hosted on 3rd party services.
        </p>
      </div>
    </div>
  );
};

export default Footer;
