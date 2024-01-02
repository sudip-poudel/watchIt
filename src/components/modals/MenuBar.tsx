import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuBar = () => {
  // const menuItems = [
  //   "Home",
  //   "Country",
  //   "Genre",
  //   "Movies",
  //   "Tv Shows",
  //   "Trending",
  //   "Top IMDB",
  // ];

  return (
    <div
      className="relative w-full z-10 bg-black "
      onClick={() => {
        console.log("dsadas");
      }}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "fit-content" }}
        transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.5 }}
        className="absolute w-[12%] bg-primary top-16 h-60 left-6 rounded-sm flex flex-col items-center justify-around py-2 overflow-hidden z-50"
      >
        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md ">
          <Link to={"/home"}>
            <motion.p className="py-1">Home</motion.p>
          </Link>
        </motion.div>
        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md">
          <Link to={"/country"}>
            <motion.p className="py-1">Country</motion.p>
          </Link>
        </motion.div>

        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md">
          <Link to={"/genre"}>
            <motion.p className="py-1">Genre</motion.p>
          </Link>
        </motion.div>

        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md">
          <Link to={"/movies"}>
            <motion.p className="py-1">Movies</motion.p>
          </Link>
        </motion.div>

        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md">
          <Link to={"/tv"}>
            <motion.p className="py-1">TV Shows</motion.p>
          </Link>
        </motion.div>

        <motion.div className="hover:bg-black hover:text-primary w-3/4 text-center font-bold rounded-md">
          <Link to={"/trending"}>
            <motion.p className="py-1">Trending</motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MenuBar;
