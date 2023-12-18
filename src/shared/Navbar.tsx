import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="navbar-bg  p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <Button variant={"ghost"} className="hover:bg-transparent">
            <Menu color="white" width={28} height={28} />
          </Button>
          <Link to={"/home"}>
            <img
              src="/images/logo.jpeg"
              alt="logo"
              className="w-11 h-10 rounded-full ml-3"
            />
          </Link>
        </div>
        <SearchBox isLandingPage={false} />
        <Button
          type="button"
          variant={"outline"}
          className="bg-transparent duration-300   text-white  transition-all   hover:outline-none hover:bg-primary hover:text-black hover:border-primary "
        >
          <Link to={"/signin"} className="flex gap-2 ">
            <p>Log In</p> <ArrowRight />
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
