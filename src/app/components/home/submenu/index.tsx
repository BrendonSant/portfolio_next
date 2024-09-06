"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu,LayoutPanelLeft,Move3D,Code } from "lucide-react"

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex w-full pt-16">
      <div className="w-full px-8 max-w-screen-xl mt-4 hidden max-md:inline-flex">
        <Menu onClick={toggleMenu} className="cursor-pointer" size={34} />
      </div>

      {/* Menu de tela cheia com animação */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <X
          onClick={toggleMenu}
          className="cursor-pointer absolute top-8 right-8  text-black"
          size={34}
        />
        <ul className="flex flex-col items-start space-y-6">
          <li className="flex items-center">
            <LayoutPanelLeft color="black"  />
            <Link
              className="transition ease-in duration-300 py-2 px-4 text-xl hover:text-purple-600  text-black"
              href="post/Design"
              onClick={toggleMenu} // Fechar o menu ao clicar
            >
              Design
            </Link>
          </li>
          <li  className="flex items-center">
            <Move3D color="black" />
            <Link
              className="transition ease-in duration-300 py-2 px-4 text-xl hover:text-purple-600  text-black"
              href="post/3d"
              onClick={toggleMenu} // Fechar o menu ao clicar
            >
              3D
            </Link>
          </li>
          <li  className="flex items-center">
            <Code  color="black"/>
            <Link
              className="transition ease-in duration-300 py-2 px-4 text-xl hover:text-purple-600  text-black"
              href="post/Dev"
              onClick={toggleMenu} // Fechar o menu ao clicar
            >
              Dev
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu horizontal para telas maiores */}
      <div className="hidden w-full max-w-screen-xl justify-center md:flex">
        <ul className="flex px-4 py-6 space-x-4">
          <li>
            <Link
              className="transition ease-in duration-300 py-2 px-4 hover:text-purple-600"
              href="post/Design"
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              className="transition ease-in duration-300 py-2 px-4 hover:text-purple-600"
              href="post/3d"
            >
              3D
            </Link>
          </li>
          <li>
            <Link
              className="transition ease-in duration-300 py-2 px-4 hover:text-purple-600"
              href="post/Dev"
            >
              Dev
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
