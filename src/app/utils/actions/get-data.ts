  export async function getDataHome() {
    try {
        const resultado = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66dee79a9bf0dbeae28b1e0d?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,id`);
        
        console.log("Status:", resultado.status);
        console.log("Response:", resultado);

       

        return await resultado.json();
    } catch (err) {
        console.error("Error during fetch:", err);
        throw new Error("Failed to fetch data");
    }
} 
 