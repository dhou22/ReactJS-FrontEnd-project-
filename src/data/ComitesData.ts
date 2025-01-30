
interface ComiteDataProps {
    img_src: string;
    name: string;
    description: string;
}

export const data: ComiteDataProps[] = [
    {
        img_src: 'web.jpg',
        name: 'Comité développement web',
        description: `Nous nous engageons à améliorer et développer les compétences de nos membres dans le domaine de développement web en organisant
         des formations et des compétitions en réalisant divers projets.`
    },
    {
        img_src: 'marketing.jpg', // Corrected the image path if needed
        name: 'Comité marketing',
        description: `Nous travaillons à former nos membres sur la création de designs professionnels pour des publications et des reels à l'aide de Canva, 
         tout en proposant également des formations sur des outils comme Photoshop.`
    },
    {
        img_src: 'robotics.jpg',
        name: 'Comité robotique ',
        description: `Nous nous efforçons de fournir des formations professionnelles et concrètes en robotique à nos membres, 
        dans le but de développer leurs compétences dans ce domaine.`
    }
];
