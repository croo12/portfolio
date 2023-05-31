import { BadgeProps, CardComponentProps, IconWithLinkProps } from "./props"

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
        title : "PROJECTS"
    },
    {
        url : "/else",
        title : "EXPERIENCE/AWARDS"
    }
]

export const HomeDescribe = [
    `저는 항상 발전하기 위해 노력하고`,
    `새로운 지식을 얻는 것을 즐기는 풀스택 웹 개발자입니다.`,
    `긍정적인 마음, 문제 해결을 즐기는 성격이 저의 장점입니다. `,
    `\u200B`,
    `카페인을 코드로 바꾸는 능력이 있는 희귀한 생명체.`
]

export const frontIcons : Array<IconWithLinkProps> = [
    {
        iconSrc : "/icons/javascript.svg",
        linkUrl : "",
        width : 48,
        height : 48,
    },
    {
        iconSrc : "/icons/typescript.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/react.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/redux.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/vuejs.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/sass.svg",
        linkUrl : "",
        width : 48,
        height : 48
    }
]

export const backIcons = [
    {
        iconSrc : "/icons/java.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/spring.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/springboot.svg",
        linkUrl : "",
        width : 48,
        height : 48
    }
]

export const deploymentIcons = [
    {
        iconSrc : "/icons/docker.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/amazonaws.svg",
        linkUrl : "",
        width : 48,
        height : 48
    },
    {
        iconSrc : "/icons/nginx.svg",
        linkUrl : "",
        width : 48,
        height : 48
    }
]

export const introduceData: Array<Array<BadgeProps>> = [
    [
        {
            iconSrc: "/introduce/profile.png",
            title: "이름",
            value: "이지우"
        },
        {
            iconSrc: "/introduce/calendar.png",
            title: "생년월일",
            value: "1994.03.14"
        },
        {
            iconSrc: "/introduce/maps.png",
            title: "주소지",
            value: "대전광역시 서구"
        },
    ],
    [
        {
            iconSrc: "/introduce/phone.png",
            title: "연락처",
            value: "010-4467-8613"
        },
        {
            iconSrc: "/introduce/email.png",
            title: "이메일",
            value: "its19447@gmail.com"
        },
        {
            iconSrc: "/introduce/school.png",
            title: "학력",
            value: "충남대학교 졸업"
        },
    ]
]