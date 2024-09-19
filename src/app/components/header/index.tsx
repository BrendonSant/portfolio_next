"use client";

import LogoW from "@/../../logo/SVG/logo_white_new.svg"; // foi instalado o plugin @svgr/webpack para possibilitar que o SVG fosse importado como componente.
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    // Limpar o event listener ao desmontar
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]); // Remove 'top' do array de dependências

  return (
    <header
      className={`flex justify-center items-center fixed w-full max z-50 px-5 transition-colors duration-300  ${
        top ? "bg-transparent" : "bg-mcolor-navy-navy-700/50 backdrop-blur"
      }`}
    >
      <div className=" flex flex-col w-full justify-center items-center">
        <div className=" flex items-center max-w-screen-2xl w-full justify-between">
              <div>
                  <Link href="/">
                  <LogoW className="size-16 antialiased" />
                  </Link>
              </div>
              <nav className="px-2 flex justify-around">
                  <Link
                  className="px-3 transition ease-in duration-200 hover:text-mcolor-neon-neon-600"
                  href="/"
                  >
                  Home
                  </Link>
                  <Link
                  className="px-3 transition ease-in duration-200 hover:text-mcolor-neon-neon-600"
                  href="/#about"
                  >
                  About
                  </Link>
                  <Link
                  className="px-3 transition ease-in duration-200 hover:text-mcolor-neon-neon-600"
                  href="/#skills"
                  >
                  Skills
                  </Link>
              </nav> 
              {/* Linha Horizontal */}
              
          </div>
          <div className="w-full">
          </div>
      </div>
        
     
    </header>
  );
}
