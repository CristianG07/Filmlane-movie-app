import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import { LuClock3 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="h-screen bg-hero-bg bg-cover bg-right pt-10">
      <div className="section justify-center items-start h-full flex-col text-white">
        <div className="w-full sm:w-[70%] lg:w-[50%]">
          <span className="text-primary text-2xl sm:text-3xl font-bold">Filmlane</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Unlimited <span className="text-primary">Movie</span>, TVs Shows, &
            More.
          </h1>
        </div>
        <div className="flex gap-4 flex-wrap items-center mt-5">
          <div className="flex gap-3 items-center">
            <p className="px-2 py-1 border border-white bg-white text-black text-xs font-semibold">
              PG 18
            </p>
            <p className="px-2 py-1 border-2 border-white text-white text-xs font-semibold">
              HD
            </p>
          </div>
          <div className="flex gap-2 text-sm md:text-base">
            <Link to="/" className="hover:text-primary">
              Romance,
            </Link>
            <Link to="/" className="hover:text-primary">
              Drama
            </Link>
          </div>
          <div className="flex gap-4">
            <p className="flex items-center gap-2 text-sm md:text-base">
              <RxCalendar className="text-primary" />
              2023
            </p>
            <p className="flex items-center gap-2 text-sm md:text-base">
              <LuClock3 className="text-primary" />
              128 min
            </p>
          </div>
        </div>
          <button className="btn_primary py-4 bg-nav text-sm font-semibold flex items-center gap-3 mt-6">
            <FaPlay />
            WATCH NOW
          </button>
      </div>
    </section>
  );
};
