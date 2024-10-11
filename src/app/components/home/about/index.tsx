import Image from "next/image";

interface AboutProps{
    txtabout:string;
    url: string;
}

export function About({txtabout, url}: AboutProps){

    return (
        <section className="w-full h-80 flex flex-col justify-center items-center">
          <div id="about" className="w-full max-w-screen-2xl flex flex-col justify-center items-center">
            <h2 className="text-5xl tracking-widest mt-48 mb-24 ml-2 font-bold">ABOUT</h2>
            <div className="flex justify-around items-center w-full mt-8 max-sm:flex-col max-sm: gap-20">
              <Image
                alt="Imagem About"
                src={url}
                priority={true}
                quality={100} // Mantém alta qualidade
                width={200} // Define larguras explícitas
                height={200} // Define altura explícita
                className=" h-auto  sm:w-48 sm:h-auto md:w-72"
              />
              <p className=" text-base w-4/12 max-w-screen-sm max-sm:text-sm max-sm:w-10/12">{txtabout}</p>
            </div>
          </div>
        </section>
      );
    }