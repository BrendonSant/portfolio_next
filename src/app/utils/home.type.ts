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
           social:SocialProps[];
        }
    }
}

interface SkillProps{
    imagens:{
        url:string;
    }

}

interface SkilllogosProps{
    logos:{
        url:string;
    }
    
}

interface SocialProps{
    socialm:{
        url:string;
    }
    
}