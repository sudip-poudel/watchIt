import { Button } from "@/components/ui/button";
import SearchBox from "@/shared/SearchBox";
import { PlaySquare } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <img
        src="/images/intro.jpg"
        alt="introinmage"
        className="hidden absolute w-full h-screen object-cover -z-50 opacity-25 md:block"
      />
      <div className="md:py-4 md:px-10 xl:px-28">
        <div className="bg-[#181818] p-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src="/images/logo.jpeg"
              alt="logo"
              className="w-32 h-w-32 rounded-full"
            />

            <h2 className="text-xl text-[#888888] font-medium">
              Watch Movies Online in HD for Free!
            </h2>
            <SearchBox isLandingPage={true} />
            <p className="text-center text-[#757575]">
              Top search: Killers of the Flower Moon Rick and Morty Family Guy
              Monarch: Legacy of Monsters Sweet Home Family Switch May December
              Candy Cane Lane A Murder at the End of the World Squid Game: The
              Challenge
            </p>

            <Button
              className="bg-[#2979b4] rounded-xl hover:bg-[#59a8e0]"
              asChild
            >
              <Link to={"/home"}>
                <p className="text-lg">Go to Homepge</p>
                <PlaySquare className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
          <div className=" mt-10">
            <h3 className="text-lg text-white">
              WatchIT - Watch Movies Online for FREE
            </h3>
            <p className="text-[#757575] mt-4">
              WatchIT - the ultimate online movie streaming website that brings
              the magic of cinema to your fingertips. With a vast and diverse
              database, as well as a multitude of exciting features, WatchIT
              offers an unparalleled movie-watching experience for film
              enthusiasts worldwide.
            </p>

            <p className="text-[#757575] mt-4">
              At WatchIT, we take pride in our extensive database that
              encompasses a wide range of movies from various genres, eras, and
              countries. From Hollywood blockbusters to independent gems, we
              have something for everyone. Our database is continuously updated
              with the latest releases, ensuring that you stay up-to-date with
              the hottest films in the industry.
            </p>

            <p className="text-[#757575] mt-4">
              One of the standout features of WatchIT is our personalized
              recommendation system. Our sophisticated algorithms analyze your
              viewing history, preferences, and ratings to curate a customized
              list of movie recommendations tailored specifically to your
              tastes. Discover new films you'll love and embark on exciting
              cinematic adventures you never knew existed.
            </p>

            <p className="text-[#757575] mt-4">
              In addition to our large database and personalized
              recommendations, WatchIT offers high-quality streaming for an
              immersive viewing experience. Enjoy movies in stunning
              high-definition resolution, accompanied by crisp audio, bringing
              the theater experience right to your home. Our adaptive streaming
              technology ensures smooth playback, adjusting to your internet
              connection for uninterrupted enjoyment.
            </p>

            <p className="text-[#757575] mt-4">
              WatchIT also understands the importance of convenience and
              accessibility. Our platform is compatible with various devices,
              including laptops, tablets, and smartphones, allowing you to watch
              movies anytime, anywhere. Whether you're at home or on the go,
              WatchIT keeps you connected to your favorite films.
            </p>

            <p className="text-[#757575] mt-4">
              Furthermore, WatchIT fosters a vibrant community of movie
              enthusiasts. Engage in discussions, share reviews, and interact
              with fellow cinephiles through our dedicated forums and social
              features. Connect with like-minded individuals, exchange
              recommendations, and dive deeper into the world of cinema.
            </p>

            <p className="text-[#757575] mt-4">
              In summary, WatchIT is the ultimate online movie streaming
              destination, offering a vast database, personalized
              recommendations, high-quality streaming, device compatibility, and
              an engaging community. Prepare to be captivated by the world of
              cinema as you embark on a cinematic journey like no other. Welcome
              to WatchIT, where movies come to life.
            </p>
            <p className="text-white text-center">
              DCMA Notice: This site does not store any files on our server, we
              only linked to the media which is hosted on 3rd party services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
