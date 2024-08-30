import { BrandsHoverCard } from "@/components/navigation/header/desktop/brands-hover-card";
import ServicesHoverCard from "@/components/navigation/header/desktop/services-hover-card";
import { BookUserIcon, CarIcon, HandCoinsIcon, HomeIcon, LucideProps, StarIcon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavData = {
    name: string;
    slug: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    type: 'link' | 'dropdown'
    hoverContent?: any,
}

export const navData: NavData[] = [
    {
        name: "Home",
        slug: "/",
        icon: HomeIcon,
        type: 'link'

    }, {
        name: "All Cars",
        slug: "/",
        icon: CarIcon,
        type: 'link'
    },
    {
        name: "Brands",
        slug: "/",
        icon: StarIcon,
        type: 'dropdown',
        hoverContent: BrandsHoverCard
    },

    {
        name: "Our Services",
        slug: "/",
        icon: HandCoinsIcon,
        type: 'dropdown',
        hoverContent: ServicesHoverCard,
    },

    {
        name: "Contact Us",
        slug: "/",
        icon: BookUserIcon,
        type: 'link'
    },

]