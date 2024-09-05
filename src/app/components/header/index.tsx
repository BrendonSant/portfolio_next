"use client";

import LogoW from "@/../../logo/SVG/logo_white.svg"; // foi instalado o plugin @svgr/webpack para possibilitar que o SVG fosse importado como componente.
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
        top ? "bg-mcolor-navy-navy-900" : "bg-mcolor-navy-navy-400/50"
      }`}
    >
        <div className=" flex items-center max-w-screen-xl w-full justify-between">
            <div>
                <Link href="/">
                <LogoW className="size-20 antialiased" />
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
                href="/skills"
                >
                About
                </Link>
                <Link
                className="px-3 transition ease-in duration-200 hover:text-mcolor-neon-neon-600"
                href="/3d"
                >
                Skills
                </Link>
            </nav> 
        </div>
      
    </header>
  );
}
