import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React, { useState } from "react";
import Recomended from "./Recomended";
import Select from "react-select";

const Filter = () => {
  const types = [
    { value: "Movies", label: "Movies" },
    { value: "tv-shows", label: "TV-shows" },
  ];
  const genre = [
    { value: "action", label: "Action" },
    { value: "adult", label: "Adult" },
    { value: "adventure", label: "Adventure" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "musical", label: "Musical" },
  ];

  const country = [
    {
      value: "argentina",
      label: "Argentina",
    },
    {
      value: "Austria",
      label: "Austria",
    },
    {
      value: "brazil",
      label: "Brazil",
    },
    {
      value: "india",
      label: "India",
    },
    {
      value: "china",
      label: "China",
    },
  ];
  return (
    <>
      <Navbar />
      <form className="mt-20 ml-5 min-w-content flex flex-row gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-sm px-3 bg-zinc-800 border-none focus:outline-none text-white"
        />
        <Select
          options={types}
          placeholder="Types"
          isSearchable={false}
          styles={{
            control: (base, state) => ({
              ...base,
              background:"#292929",
              "&:hover": { background: "rgb(0,255,255)" },
              borderStyle: "none",
            }),
          }}
        />
        <Select
          options={genre}
          placeholder="Genre"
          isSearchable={false}
          styles={{
            control: (base) => ({
              ...base,
              background: "#292929",
              "&:hover": { background: "rgb(0,255,255)" },
              borderStyle: "none",
            }),
          }}
        />
        <Select
          options={country}
          placeholder="Country"
          isSearchable={false}
          // bg-[#292929]
          styles={{
            control: (base) => ({
              ...base,
              background: "#292929",
              "&:hover": { background: "rgb(0,255,255)" },
              borderStyle: "none",
            }),
          }}
        />
        <button
          type="submit"
          className="border bg-blue-500 rounded-sm px-3 border-gray-700"
        >
          Filter
        </button>
      </form>
      <Recomended />
      <Footer />
    </>
  );
};

export default Filter;
