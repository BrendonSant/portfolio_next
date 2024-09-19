"use client";

import { HomeProps } from "@/app/utils/home.type";
import Image from "next/image";


export function Footer({object}:HomeProps){
    return(
        <section className=" h-96 mt-36 w-full bg-black flex justify-center">
            <div className=" flex flex-col justify-between items-center max-w-screen-2xl">

                
                <div className=" mt-40 flex">
                {
                   object.metadata.social.map(socials => (
                    <a href={socials.link}>
                        
            
                    <article className="mr-8 px-6 " key={socials.socialm?.url|| Math.random()}>
                      {socials.socialm?.url ? (
                        <Image src={socials.socialm.url} alt="3D - logos" width={32} height={32} />
                      ) : (
                        <p>Logo não disponível</p>
                      )}
                    </article>
                  
                  </a>
                  ))
                }
                </div>
                <h3 className="mt-36">Made by Brendon Santos - santsmcb - 2024</h3>
                

            </div>

        </section>
    )
}