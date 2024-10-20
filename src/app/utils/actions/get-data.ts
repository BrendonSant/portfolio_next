import { now } from "three/examples/jsm/libs/tween.module.js";

   export async function getDataHome() {
    try {
        const resultado = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66dee79a9bf0dbeae28b1e0d?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,id`,{next: {revalidate:120}});
        
        console.log("Status:", resultado.status);
        console.log("Response:", resultado);

       

        return await resultado.json();
    } catch (err) {
        console.error("Error during fetch:", err);
        throw new Error("Failed to fetch data");
    }
}  
 
export async function getSubMenu() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,{next: {revalidate:120}})
        if (!res.ok){
            throw new Error("Failed to fetch menu data")
        }
        return res.json();
    }catch(err){
        throw new Error("Failed to fetch menu data")
    } 

    
}

export async function getItemBySlug(itemSlug: string){
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    //Definindo o objeto de consulta pelo slug
    const queryParams = new URLSearchParams({
         query: JSON.stringify({
            slug: itemSlug
         }),
         props: 'slug,title,metadata',
         read_key: process.env.READ_KEY as string
    })


    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        
        const res = await fetch(url, { next: { revalidate: 120 } })

        if(!res.ok){
            throw new Error("Failed get item by slug") 
        }

        return res.json();

    } catch (err) {
        throw new Error("Failed get item by slug") 
    }

}

