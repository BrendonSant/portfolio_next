 import { Submenu } from "./components/home/submenu";
 import { getDataHome } from "./utils/actions/get-data";
 import ThreeViewport from "./components/home/viewport";
 import { About } from "./components/home/about";
 
 
import { HomeProps } from "./utils/home.type";
import { Skills } from "./components/home/skills";

export default async function Home() {

  const {object}: HomeProps = await getDataHome();

  
 
  return (
    <main>
      <Submenu/>
      <ThreeViewport />
      <About txtabout={object.metadata.about.txtabout}
       url={object.metadata.about.imagem.url} />
       
       <Skills object={object} />
       
      
      
   
    </main>
  );
}
 