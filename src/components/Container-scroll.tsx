"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function Heroscroll() {
  return (
    <div className="flex flex-col  overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black font-mono">
              It's more than a <br />
              <div className="flex flex-row items-center justify-center bottom-2 ">
                <div>
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
                    Chess-Game
                  </span>
                </div>
                <div>
                  <img
                    className="h-20 w-20"
                    src="../images/logo.png"
                    alt="logo"
                  />
                </div>
              </div>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
