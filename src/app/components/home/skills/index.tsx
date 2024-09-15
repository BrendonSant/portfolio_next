"use client";

import { HomeProps } from "@/app/utils/home.type";
import Image from "next/image";



export function Skills({object}: HomeProps){
  return(
    <div className="flex w-full mt-52 justify-center  ">
      <section  className="flex flex-col justify-center items-center max-w-screen-2xl w-full px-10">
        <h2 className="text-4xl mb-36 ">SKILLS</h2>
        <div className="w-full justify-center items-center">
          
          <div className="flex items-center mb-4">
            <Image className=" mr-4 " src="/img/3d.png" alt="3d" width={68} height={68} />
            <h3 className="text-2xl">3D</h3>
          </div>
        
        



        <div className=" w-full flex items-center">

        <div className=" p-8 relative w-1 h-32 bg-transparent mb-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-1 bg-white animate-drop"></div>
          </div>
        </div>


        {object.metadata.skills.map(skill => (
          <article className="mr-8  px-6" key={skill.model?.url || Math.random()}>
          {skill.model?.url ? (
            <Image src={skill.model.url} alt="3d - logos" width={52} height={52}  />
          ) : (
            <p>Logo não disponível</p>
          )}
          </article>
       ))}
        </div>
          
        <div className="flex items-center mb-4">
          <Image className=" mr-4 " src="/img/ui.png" alt="3d" width={68} height={68} />
          <h3 className="text-2xl">UI Designer</h3>
        </div>
        

        <div className="w-full flex items-center">

        <div className=" p-8 relative w-1 h-32 bg-transparent mb-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-1 bg-white animate-drop"></div>
          </div>
        </div>


        {object.metadata.skill_logos.map(logo => (
          <article className="mr-8 mb-10 px-6" key={logo.ui?.url || Math.random()}>
          {logo.ui?.url ? (
            <Image src={logo.ui.url} alt="3d - logos" width={52} height={52}  />
          ) : (
            <p>Logo não disponível</p>
          )}
          </article>
       ))}

        </div>

        <div className="flex items-center mb-4">
        <Image className="mr-4" src="/img/dev.png" alt="3d" width={68} height={68} />
        <h3 className="text-2xl">Front-End</h3>
        </div>
        


        <div className="w-full flex items-center">
        
        <div className="  p-8 relative w-1 h-32 bg-transparent mb-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
           
          </div>
        </div>



        {object.metadata.skill_logos2.map(logo2 => (
          <article className="mr-8 mb-10 px-6" key={logo2.dev?.url || Math.random()}>
          {logo2.dev?.url ? (
            <Image src={logo2.dev.url} alt="3d - logos" width={52} height={52}  />
          ) : (
            <p>Logo não disponível</p>
          )}
          </article>
       ))}

        </div>
       
        </div>
        
        
      </section>
    </div>
  )
}
