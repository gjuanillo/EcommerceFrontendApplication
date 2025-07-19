import type { ProductType } from "../types/ProductType";
import { bnrImg1, bnrImg2, bnrImg3 } from "../utils/constants";

export const products: ProductType[] = [{
    productId: 652,
    productName: "Iphone Xs max",
    image: "/f68641e2-ee89-4c1d-a5bf-3de52421113f.png",
    description: "Experience the latest in mobile technology",
    quantity: 10,
    price: 1450.0,
    discount: 10.0,
    specialPrice: 1305.0
},
{

    productId: 654,
    productName: "MacBook Air M2s",
    image: "/f68641e2-ee89-4c1d-a5bf-3de52421113f.png",
    description: "Ultra-thin laptop with Apple's M2 chip",
    quantity: 0,
    price: 2550.0,
    discount: 20.0,
    specialPrice: 2040.0
},
{

    productId: 657,
    productName: "Iphone 17",
    image: "/f68641e2-ee89-4c1d-a5bf-3de52421113f.png",
    description: "Latest Iphone Product",
    quantity: 0,
    price: 2550.0,
    discount: 0.0,
}
]

export const HeroBannerList = [
    {
        id: 1,
        image: bnrImg3,
        title: "Built for Gamers",
        subtitle: "Powerful Components",
        description: "Play at the highest quality with latest released components",
    },
    {
        id: 2,
        image: bnrImg2,
        title: "Upgrade your experience",
        subtitle: "Peripherals Showcase",
        description: "Discover top-performing keyboards, mice, headsets, and more",
    },
    {
        id: 3,
        image: bnrImg1,
        title: "License to Create",
        subtitle: "Software Essentials",
        description: "Get genuine Windows, Adobe, and productivity software at great prices",
    }
]
