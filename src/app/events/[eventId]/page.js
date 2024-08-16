"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import LongCardHeader from "@/app/assets/long-card-header.svg";
import PayNowButton from "@/app/assets/paynow.svg";

import Back from "@/app/assets/back.svg";
import endPng from "@/app/assets/end.png";

import { useRouter, useParams } from "next/navigation";
import banners from "@/app/data/Flyer/banner.png";
import { NON_TEC_EVENTS, TEC_EVENTS } from "@/app/data/events.data";


function Event() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.eventId;

  console.log(eventId);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  const event = eventId > 99 ? NON_TEC_EVENTS.find((event) => event.eventId === eventId) : TEC_EVENTS.find((event) => event.eventId === eventId);

  return (
    <div className="relative min-h-screen overflow-auto bg-black">
      <Image
        src={endPng}
        alt="Event Title"
        priority
        className="fixed top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-20"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-5">
        <div
          className={`w-full z-20  h-full px-4 py-8 mx-auto text-center lg:px-8 flex flex-col items-center justify-between transition-opacity ease-in duration-700 opacity-0 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full z-20  justify-center pt-5 md:p-20 p-5">
            <Image
              src={Back}
              alt="Event Title"
              width={150}
              className="cursor-pointer"
              priority
              onClick={() => router.back()}
            />
            <div className="pb-10">
              <div className="bg-[#3D3D3D] bg-opacity-40 w-full my-5">
                <div className="flex flex-row  text-white">
                  <div className="lg:w-3/6 lg:block">
                    <Image
                      src={LongCardHeader}
                      height={25}
                      className=""
                      priority
                      alt="Event Title"
                    />
                    <div className="p-5 text-white text-center">
                      <div>
                        <p className="font-bold text-white font-bills text-5xl mt-5 text-center">
                          {event.title}
                        </p>
                        <div className="block g:hidden h-full justify-center items-center m-auto">
                          {/* <Image src={banners} width={1000} className="w-fit h-fit"  priority /> */}
                        </div>
                        <p className="font-bold text-red-600 font-port text-lg mt-5 lg:mt-0 text-center">
                          {event.subTitle}
                        </p>
                        <p className="font-bold font-port text-sm mt-2 lg:mt-0 text-center">
                          {event.dec}
                        </p>
                      </div>
                      <div className="grid font-bold font-port mt-10 justify-center text-center">
                        <div className="sm:w-fit text-center">
                          <p className="text-white font-bold text-2xl font-bills text-center">
                            ENTRY FEES
                          </p>
                          <p className="text-red-700 font-bold text-3xl font-bills text-center m-auto">
                            ₹{event.entryFee}
                          </p>
                          <div className="sm:w-fit text-center mt-20 sm:mt-0 hidden lg:block font-bold font-bills pt-10 text-lg">
                            {event.price[0] ? (
                              <p className="text-center text-xl">
                                1st PRICE -{" "}
                                <span className="text-red-700">
                                  ₹ {event.price[0]}
                                </span>
                              </p>
                            ) : null}
                            <div className="flex flex-row items-center justify-around gap-6 mt-2 text-xl">
                              {event.price[1] ? (
                                <p>
                                  2nd PRICE -{" "}
                                  <span className="text-red-700">
                                    ₹ {event.price[1]}
                                  </span>
                                </p>
                              ) : null}
                              {event.price[2] ? (
                                <p>
                                  3rd PRICE -{" "}
                                  <span className="text-red-700">
                                    ₹ {event.price[2]}
                                  </span>
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                      {event.formLink ? (
                        <div className="flex flex-row justify-around p-2">
                          <a href={event.formLink} className="w-fit h-fit">
                            <Image
                              src={PayNowButton}
                              alt="Event Title"
                              className="brightness-125 cursor-pointer hover:scale-110 hover:brightness-125 duration-500 m-auto sm:mt-10 mt-10 min-w-fit"
                              priority
                            />
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="hidden w-4/6 lg:block h-full justify-center items-center m-auto">
                    {/* <Image src={banners} priority /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
