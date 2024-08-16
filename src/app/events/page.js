"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import EventText from "@/app/assets/event.svg";

import endPng from "@/app/assets/end.png";
import EventCard from "../components/EventCard";

import { NON_TEC_EVENTS, TEC_EVENTS } from "@/app/data/events.data";

function Events() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  return (
    <div className="relative min-h-screen overflow-auto bg-black">
      <Image
        src={endPng}
        alt="Event Title"
        priority
        className="fixed top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-20 bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-5">
        <div
          className={`w-full z-20  h-full px-4 py-8 mx-auto text-center lg:px-8 flex flex-col items-center justify-between transition-opacity ease-in duration-700 opacity-0 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src={EventText}
              alt="Event Title"
              width={200}
              className=""
              priority
            />
            <p className="text-white font-bold text-4xl font-bills text-center mt-14">
              TECH EVENTS
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-20">
              {TEC_EVENTS.map((event) => {
                return <EventCard event={event} key={event.eventId} />;
              })}
            </div>
            <p className="text-white font-bold text-4xl font-bills text-center mt-14">
                NON TECH EVENTS
              </p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-20">
              {NON_TEC_EVENTS.map((event) => {
                return <EventCard event={event} key={event.eventId} />;
              })}
            </div>
      
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
