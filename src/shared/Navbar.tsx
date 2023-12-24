import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="navbar-bg  p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <Button
            variant={"ghost"}
            className="hover:bg-primary w-12 h-12 text-white hover:text-black  rounded-full"
          >
            <Menu />
          </Button>
          <Link to={"/home"} className="w-10 h-10 ml-3">
            <img
              src="/images/logo.jpeg"
              alt="logo"
              className="object-cover rounded-full"
            />
          </Link>
        </div>
        <SearchBox isLandingPage={false} />
        <Button
          type="button"
          asChild
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
