import Image from "next/image";

interface AboutProps{
    txtabout:string;
    url: string;
}

export function About({txtabout, url}: AboutProps){

    return(
        <section  className="w-full h-80 flex flex-col justify-center items-center ">
            <div id="about" className="w-full max-w-screen-2xl flex flex-col justify-center items-center">
                <h2  className="text-5xl tracking-widest mt-48 mb-24 ml2 font-bold">ABOUT</h2>
                <div  className="flex justify-around items-center w-full mt-8  ">
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