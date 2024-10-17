export interface PostProps{
    objects: ObjectPost[]
}


interface ObjectPost{
    slug:string;
    title: string;
    metadata:{
        banenr:{
            url:string;
        };
        description:{
            title:string;
            text: string;
        };
        image01:{
            url:string;
        }
        video01:{
            url: string;
        } | null;
        image02:{
            url: string;
        }
        image03:{
            url:string;
        }
        button:{
            title: string;
            url:string;
        }
    }
}