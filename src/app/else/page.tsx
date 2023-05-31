import Feed from "@/components/else/Feed";

const dummy = [
    {
        name : "충남대학교 졸업", 
        description: "가까스로 졸업", 
        date: "2020.02"
    },
    {
        name : "컴퓨터 활용능력 1급 취득", 
        description: "필기 / 실기", 
        date: "2021.02"
    },
    {
        name : "JSL인재개발원 입소", 
        description: "글로벌 ICT 전문가 양성과정 Track II", 
        date: "2021.07"
    },
    {
        name : "과정평가형 정보처리 산업기사 취득", 
        description: "(과정평가형)정보처리 산업기사", 
        date: "2022.05.26"
    },
    {
        name : "JSL인재개발원 수료", 
        description: "글로벌 ICT 전문가 양성과정 Track II", 
        date: "2022.05"
    },
    {
        name : "SSAFY", 
        description: "삼성 청년 소프트웨어 아카데미 8기 입소", 
        date: "2022.07"
    },
    {
        name : "공통프로젝트 최우수 프로젝트 - 1등", 
        description: "SSAFY - Live 원터치 부동산 프로젝트", 
        date: "2023.02.27"
    },
    {
        name : "특화프로젝트 최우수 프로젝트 - 1등", 
        description: "SSAFY - Cookscape 술래잡기 게임", 
        date: "2023.04.18"
    },
    {
        name : "자율프로젝트 우수 프로젝트 - 3등", 
        description: "SSAFY - 우아한 우리 아이 한글교육 어플리케이션", 
        date: "2023.05.25"
    },
    {
        name : "SSAFY 8기", 
        description: "SSAFY 8기 재학중", 
        date: "~ 현 재"
    },
]

const Achievement = () => {
    return (
        <>
            <Feed achievements={dummy} />
        </>
    )
}

export default Achievement;