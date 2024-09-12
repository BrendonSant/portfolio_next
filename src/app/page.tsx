 import { Submenu } from "./components/home/submenu";
 import { getDataHome } from "./utils/actions/get-data";
 import ThreeViewport from "./components/home/viewport";
 import { About } from "./components/home/about";
 import Skills from "./components/home/skills";
import { HomeProps } from "./utils/home.type";

export default async function Home() {

  const {object}: HomeProps = await getDataHome();

  
 
  return (
    <main>
      <Submenu/>
      <ThreeViewport />
      <About txtabout={object.metadata.about.txtabout}
       url={object.metadata.about.imagem.url} />
      <Skills icons={[]} imageLists={[]} />
   
    </main>
  );
}
 