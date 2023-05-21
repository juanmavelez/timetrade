type Image = {
    alt: string,
    name: string,
}

const IMAGES: Array<Image>= [
    {
        alt: "child image",
        name: "child_img.jpeg",
    },
    {
        alt: "dancing peopla",
        name: "dance_img.jpeg",
    },
    {
        alt: "Futuristic car delivering a package",
        name: "delivery_img.jpeg",
    },
    {
        alt: "Dog chilling in the grass",
        name: "dog_img.jpeg",
    },
    {
        alt: "Image of a pizza",
        name: "food_img.jpeg",
    },
    {
        alt: "woman working",
        name: "mechanical_img.jpeg",
    },
    {
        alt: "guitar",
        name:"music_img.jpeg",
    }
];


export const getImage = (): Image  => {
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    return  IMAGES[randomIndex];
}

