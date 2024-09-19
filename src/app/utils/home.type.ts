export interface HomeProps{
    object:{
        slug: string;
        title:string;
        metadata:{
           banner:{
            url:string;
             
           } ;
           heading:string;
           about:{
            imagem:{
                url:string;
            }
            txtabout:string;

           };
           skills:SkillProps[];
           skill_logos:SkilllogosProps[];
           skill_logos2:SkilllogosProps2[];
           social:SocialProps[];
        }
    }
}

interface SkilllogosProps2{
    dev:{
        url:string;
    }
    
}


interface SkillProps{
    model?:{
        url:string;
    }

}

interface SkilllogosProps{
    ui:{
        url:string;
    }
    
}

interface SocialProps{
    socialm:{
        url:string;

    },
    link:string;
    
}