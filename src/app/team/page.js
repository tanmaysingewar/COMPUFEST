"use client";
import React, { useEffect, useState } from "react";

import {
  PRESIDENTS,
  CTSC_CORE_TEAM,
  CTSC_SEMICORE_TEAM,
  COMPUFEST_CORE_TEAM,
  COMPUFEST_TEAMS_SEMICORE,
} from "@/app/data/teams.data.js";
import Profile from "../components/Profile";

import endPng from "@/app/assets/end.png";
import Image from "next/image";

function TeamsPage() {
  const [isVisible, setIsVisible] = useState(false);

  // MAke it visible on after a delay
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
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-20"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-5">
        <div
          className={`absolute top-0 left-0 w-full h-full z-20 pt-5 transition-opacity ease-in duration-700 opacity-0 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mt-10">
            <p className="text-white text-4xl font-bold tracking-tight font-bills text-center">
              MEET T<span className="text-red-600">H</span>E TEAM
            </p>
            <p className="text-white  text-6xl font-bold tracking-tight font-bills text-center mt-10">
              CTSC
            </p>
            <p className="text-white  text-2xl font-bold tracking-tight font-bills text-center mt-2">
              Computer Technology Student Council
            </p>
            <div className="w-full m-auto">
              <div className="grid md:grid-cols-2 gap-4 mt-10">
                {PRESIDENTS.map(({ name, image, post }) => (
                  <Profile name={name} image={image} post={post} key={name} />
                ))}
              </div>
              <p className="text-white  text-4xl font-bold tracking-tight font-bills text-center mt-24">
                Core Team
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-5">
                {CTSC_CORE_TEAM.map(({ name, image, post }) => (
                  <Profile name={name} image={image} post={post} key={name} />
                ))}
              </div>

              <p className="text-white  text-4xl font-bold tracking-tight font-bills text-center mt-24">
                Semi Core Team
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-5">
                {CTSC_SEMICORE_TEAM.map(({ name, image, post }) => (
                  <Profile name={name} image={image} post={post} key={name} />
                ))}
              </div>
            </div>

            <p className="text-white  text-6xl font-bold tracking-tight font-bills text-center mt-24">
              COMP<span className="text-red-600">U</span>FEST
            </p>

            <p className="text-white  text-4xl font-bold tracking-tight font-bills text-center mt-10">
              Core Team
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-5">
              {COMPUFEST_CORE_TEAM.map(({ name, image, post }) => (
                <Profile name={name} image={image} post={post } key={name} />
              ))}
            </div>
          </div>

          <p className="text-white  text-4xl font-bold tracking-tight font-bills text-center mt-24">
            Semi Core Team
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-5">
            {COMPUFEST_TEAMS_SEMICORE.map(({ name, image, post }) => (
              <Profile name={name} image={image} post={post} key={name} />  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
