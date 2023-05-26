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
        name : "정보처리 산업기사 취득", 
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
        name : "공통프로젝트 우수상", 
        description: "SSAFY - Live 부동산 프로젝트", 
        date: "2023.01"
    },
    {
        name : "특화프로젝트 우수상", 
        description: "SSAFY - Cookscape 비대칭 술래잡기", 
        date: "2023.03"
    },
    {
        name : "SSAFY 8기", 
        description: "SSAFY 8기 재학중", 
        date: "~ 현 재"
    },
]

const Kennen = () => {
    return (
        <>
            <Feed achievements={dummy} />
        </>
    )
}

export default Kennen;