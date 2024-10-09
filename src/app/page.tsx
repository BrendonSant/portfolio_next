 import { Submenu } from "./components/home/submenu";
 import { getDataHome,getSubMenu } from "./utils/actions/get-data";
 import ThreeViewport from "./components/home/viewport";
 import { About } from "./components/home/about";
 
 
import { HomeProps } from "./utils/home.type";
import { Skills } from "./components/home/skills";
import { Footer } from "./components/home/footer";
import {MenuProps} from '@/app/utils/menu.type'

export default async function Home() {

  const {object}: HomeProps = await getDataHome();
  const  menu: MenuProps = await getSubMenu();

  

  
 
  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}
      <ThreeViewport />
      <About txtabout={object.metadata.about.txtabout}
       url={object.metadata.about.imagem.url} />
       
       <Skills object={object} />
       <Footer object={object}/>
       
      
      
   
    </main>
  );
}
 