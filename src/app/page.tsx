 import { Submenu } from "./components/home/submenu";
 //import { getDataHome } from "./utils/actions/get-data";
 import ThreeViewport from "./components/home/viewport";
 import { About } from "./components/home/about";

export default async function Home() {

 /*  const data = await getDataHome();

  console.log(data); 
 */
  return (
    <main>
      <Submenu/>
      <ThreeViewport />
      <About/>

   
    </main>
  );
}
 