import Image from "next/image";
import { fill } from "three/src/extras/TextureUtils.js";
interface AboutProps{
    txtabout:string;
    url: string;
}

export function About({txtabout, url}: AboutProps){

    return(
        <section className="w-full h-80 flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-xl flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-6">About</h1>
                <div className="flex justify-around items-center w-full ">
                    <Image  alt='Imagem About'
                    src={url}
                    priority={true}
                    quality={100}
                    width={300}
                    height={300}
        
                    />
                    <p className="w-4/12 max-w-screen-sm">{txtabout}</p>
                </div>
            </div>
            
        </section>
    )
}