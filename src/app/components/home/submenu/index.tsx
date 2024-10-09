"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu,LayoutPanelLeft,Move3D,Code } from "lucide-react"
import {MenuProps} from '@/app/utils/menu.type'

interface SubMenuProp{
  menu: MenuProps
}

export function Submenu({menu}: SubMenuProp) {
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
      <div className="w-full px-8 max-w-screen-2xl mt-4 hidden max-md:inline-flex">
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
         
          {menu.objects.map( item => (
            <li  className="flex items-center">
            <Move3D color="black" />
            <Link
              className="transition ease-in duration-300 py-2 px-4 text-xl hover:text-purple-600  text-black"
              href={`/pos/${item.slug}`}
              onClick={toggleMenu} // Fechar o menu ao clicar
            >
              {item.title}
            </Link>
          </li>
          ))}
          
        </ul>
      </div>

      {/* Menu horizontal para telas maiores */}
      <div className="hidden w-full max-w-screen-xl justify-center md:flex">
        <ul className="flex px-4 py-6 space-x-4">
          
          {menu.objects.map ( item => (
            <li>
            <Link
              className="transition ease-in duration-300 py-2 px-4 hover:text-purple-600"
              href={`/pos/${item.slug}`}
            >
              {item.title}
            </Link>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}
