import {getItemBySlug} from '@/app/utils/actions/get-data'
import {PostProps} from '@/app/utils/post.type'
export default async function Page({params: {slug}}: {
    params: {slug:string}
}){


    const data: PostProps = await getItemBySlug(slug);

    console.log(data);

    return(
       <div>
        <h1>Pagina de teste</h1>
       </div>
    )
}