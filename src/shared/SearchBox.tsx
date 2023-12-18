import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ isLandingPage }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form
      className="w-full flex flex-row justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (!(input?.trim() == "")) navigate(`/search/${input}`);
      }}
    >
      {isLandingPage ? (
        <Input
          className="text-center text-[#2a79b4] w-3/4 rounded-xl focus-visible:outline-[#2a79b4] border-none"
          type="string"
          placeholder="Search movies..."
          onChange={handleChange}
        />
      ) : (
        <Input
          className="text-center text-[#2a79b4] w-2/3 rounded-xl  border-none  opacity-70 hover:opacity-100 transition-all hover:drop-shadow-2xl focus:opacity-100 focus:border-none focus:drop-shadow-2xl focus:box-sdw hover:box-sdw"
          type="string"
          placeholder="Search movies..."
          onChange={handleChange}
        />
      )}
    </form>
  );
};

export default SearchBox;
