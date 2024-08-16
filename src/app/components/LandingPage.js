import Image from "next/image";

import EventButton from "@/app/assets/enter_event.svg";
import EventTitle from "@/app/assets/title.svg";

import MascotLine from "@/app/assets/mascot-line.svg";
import RandomTextHover from "./RandomChar";

import { useRouter } from "next/navigation";

import ACM from "@/app/assets/acm.png";
import CTSC from "@/app/assets/ctsc.png";

export default function LandingPage({ playing, setPlaying, setSelectTab }) {
  const router = useRouter();
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-5 ${
        playing ? `transition-opacity ease-out duration-700 opacity-0` : ``
      }`}
    >
      <div className="w-full max-w-5xl h-full px-4  mx-auto text-center lg:px-8 flex flex-col items-center justify-around">
        <div className="">
          <h1 className="font-bold tracking-tight text-white font-bills">
            <span className="text-xs">Nagar Yuwak Shikshan Sanstha's</span>
            <br />
            <span className="lg:text-2xl text-lg">
              YESHWANTRAO CHAVAN COLLEGE OF ENGINEERING NAGPUR (INDIA)
            </span>
            <br />
            <span className="lg:text-sm text-xs lg:block hidden">
              (An Autonomous Institution affiliated with Rashtrasant Tukadoji
              Maharaj Nagpur University)
            </span>
          </h1>
        </div>
        {/* <div>
          <p className="text-2xl tracking-tight text-white font-bills font-bold ">
            OUR SP<span className="text-[#FF0815]">O</span>NSOR
          </p>
        </div> */}
        <div className="w-full">
          <p className="text-xl text-white font-bills font-bold">Powered by</p>
          <div className="grid grid-cols-2 mx-auto w-[300px] mt-5">
            <Image
              src={ACM}
              alt="Event Title"
              width={60}
              className="mx-auto md:w-[100px] "
              priority
            />
            <Image
              src={CTSC}
              alt="Event Title"
              width={40}
              className="mx-auto md:w-[60px]"
              priority
            />
          </div>
        </div>
        <div>
          <span className="text-sm tracking-tight text-white font-bills font-bold">
            Organized under <br />
          </span>
          <span className="text-lg tracking-tight text-white font-bills font-bold">
            Department of Computer Technology
          </span>
          <Image
            src={EventTitle}
            alt="Event Title"
            width={500}
            className="mt-10 mx-auto"
            priority
          />
          <p className="text-sm text-white font-port mt-5 ">
            Enter in to events mystic forest
          </p>

          <div className="mt-2 flex flex-col justify-center items-center ">
            <Image
              className="shadow-2xl flex space-x-4 animate-pulse duration-5"
              height={40}
              src={MascotLine}
            />
            <Image
              className="shadow-2xl flex space-x-4 cursor-pointer hover:scale-110 hover:brightness-125 duration-500 mt-3"
              onClick={() => setPlaying(true)}
              src={EventButton}
            />
          </div>
        </div>

        <div className="justify-between mt-10 text-white w-full font-bills grid grid-cols-2 md:grid-cols-3 font-bold md:mb-4 cursor-pointer text-2xl">
          <p onClick={() => router.push("/sponsors")}>
            <RandomTextHover>SPONSORS</RandomTextHover>
          </p>
          <p onClick={() => router.push("/team")}>
            <RandomTextHover>MEET THE TEAM</RandomTextHover>
          </p>
          <p
            className="hidden md:block"
            onClick={() => router.push("/contact")}
          >
            <RandomTextHover>CONTACT</RandomTextHover>
          </p>
        </div>
        <div className="justify-between text-white w-full font-bills text-2xl font-bold gap-3 mb-3 block md:hidden">
          <p onClick={() => router.push("/contact")}>
            <RandomTextHover>CONTACT</RandomTextHover>
          </p>
        </div>
      </div>
    </div>
  );
}
