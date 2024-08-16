import React from "react";

import Image from "next/image";

import CardHEader from "@/app/assets/card_header.svg";
import EnrollNowButton from "@/app/assets/enroll_now.svg";

import { useRouter } from "next/navigation";

function EventCard({ event }) {
  const router = useRouter();
  return (
    <div
      className="mt-12 bg-[#3D3D3D] bg-opacity-50 max-w-[400px] justify-center items-center "
      key={event.eventId}
    >
      <Image
        src={CardHEader}
        alt="Event Title"
        width={600}
        className=""
        priority
      />
      <div className="items-left p-2 font-port">
        <p className="text-white font-bold text-4xl font-bills my-[20px]">
          {event.title}
        </p>
        <p className="text-red-700 text-center text-sm my-2">
          {event.subTitle}
        </p>
        <p className="text-[#B0B0B0] text-center text-xs">{event.dec}</p>
      </div>

      <hr className="w-full h-1 mx-auto bg-black border-0 dark:bg-black" />
      <div className="py-5">
        <div className="flex flex-row items-left p-2 text-white text-left font-port gap-4 text-sm justify-around">
          <div>
            <p>Data : {event.date}</p>
            <p>Venue : {event.venue}</p>
          </div>
          <div>
            <p>Time : {event.time}</p>
            <p>Duration : {event.duration}</p>
          </div>
        </div>
        <div className="flex flex-row  p-2 text-white text-left font-bills gap-4 text-sm justify-around">
          <div>
            <p className="text-white text-xl font-bold">ENTRY FEES</p>
            <p className="text-red-700 text-2xl font-bold text-center">
              {event.entryFee == "0" ? "FREE" : <span>₹{event.entryFee}</span>}
            </p>
          </div>

          {event.eventId == "5" ? (
            <div className="font-bold text-lg">
              <p>
                Pool Prize -{" "}
                <span className="text-red-700 text-xl">₹ {event.price[0]}</span>
              </p>
            </div>
          ) : (
            <div className="font-bold text-lg">
              {event.price[0] ? (
                <p>
                  1st PRICE -{" "}
                  <span className="text-red-700 text-xl">
                    ₹ {event.price[0]}
                  </span>
                </p>
              ) : null}
              {event.price[1] ? (
                <p>
                  2nd PRICE -{" "}
                  <span className="text-red-700 text-xl">
                    ₹ {event.price[1]}
                  </span>
                </p>
              ) : null}
              {event.price[2] ? (
                <p>
                  3rd PRICE -{" "}
                  <span className="text-red-700 text-xl">
                    ₹ {event.price[2]}
                  </span>
                </p>
              ) : null}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-around p-2">
          <Image
            src={EnrollNowButton}
            alt="Event Title"
            width={200}
            className="shadow-2xl flex space-x-4 cursor-pointer hover:scale-110 hover:brightness-125 duration-500"
            priority
            onClick={() => router.push(`/events/${event.eventId}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
