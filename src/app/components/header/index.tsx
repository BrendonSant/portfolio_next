import LogoW from '@/../../logo/SVG/logo_white.svg' // foi instalado o plugin @svgr/webpack para possibilitar que o SVG fosse importado como componente.

export function Header(){
    return(
        <header>
            <nav>
            <LogoW className=" size-20"/>

            </nav>
        
        </header>
    )
}