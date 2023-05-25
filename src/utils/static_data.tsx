import { CardComponentProps, IconWithLinkProps } from "./props"

export const HeaderIconsData : Array<IconWithLinkProps> = [
    {
        linkUrl : `https://github.com/croo12`,
        iconSrc : `/icons/github.svg`,
        alt : `Github Icon`,
    },
    // {
    //     linkUrl : `https://github.com/croo12`,
    //     iconSrc : `/icons/tistory.svg`,
    //     alt : `Tistory Icon`,
    // }
]

export const HeaderCardsData : Array<CardComponentProps> = [
    {
        url : "/",
        title : "HOME"
    },
    {
        url : "/introduce",
        title : "INTRODUCE"
    },
    {
        url : "/portfolio",
        title : "PORTFOLIO"
    },
    {
        url : "/kennen",
        title : "KENNEN"
    }
]