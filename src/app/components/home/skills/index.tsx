"use client";

import { HomeProps } from "@/app/utils/home.type";
import Image from "next/image";
import { useRef } from "react";


export function Skills({ object }: HomeProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  

  return (
    <div className="flex w-full mt-52 justify-center ">
      <section id="skills" className="flex flex-col justify-center items-center max-w-screen-2xl w-full px-10">
        <h2 className=" ml2 text-5xl tracking-widest mb-36 ml2 font-bold mt-36" ref={textRef}>SKILLS</h2>
        <div className="w-full justify-center items-center">
          
          <div className="flex items-center mb-4">
            <Image className="mr-4" src="/img/3d.png" alt="3D" width={68} height={68} />
            <h3 className="text-2xl px-4">3D</h3>

            {object.metadata.skills.map(skill => (
              <article className="mr-8 px-6" key={skill.model?.url || Math.random()}>
                {skill.model?.url ? (
                  <Image src={skill.model.url} alt="3D - logos" width={52} height={52} />
                ) : (
                  <p>Logo não disponível</p>
                )}
              </article>
            ))}
          </div>

          <div className="w-full flex items-center">
            <div className="p-8 relative w-1 h-32 bg-transparent mb-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
                <div className="w-1 bg-white animate-drop"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <Image className="mr-4" src="/img/ui.png" alt="UI Designer" width={68} height={68} />
            <h3 className="text-2xl px-4">UI Designer</h3>

            {object.metadata.skill_logos.map(logo => (
              <article className="mr-8 px-6" key={logo.ui?.url || Math.random()}>
                {logo.ui?.url ? (
                  <Image src={logo.ui.url} alt="UI - logos" width={52} height={52} />
                ) : (
                  <p>Logo não disponível</p>
                )}
              </article>
            ))}
          </div>

          <div className="w-full flex items-center">
            <div className="p-8 relative w-1 h-32 bg-transparent mb-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
                <div className="w-1 bg-white animate-drop"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <Image className="mr-4" src="/img/dev.png" alt="Dev" width={68} height={68} />
            <h3 className=" text-2xl px-4 ml-5">Dev</h3>
            {object.metadata.skill_logos2.map(logo2 => (
              <article className="mr-8 px-6" key={logo2.dev?.url || Math.random()}>
                {logo2.dev?.url ? (
                  <Image src={logo2.dev.url} alt="Dev - logos" width={52} height={52} />
                ) : (
                  <p>Logo não disponível</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
