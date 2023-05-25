export interface IconWithLinkProps {
    linkUrl : string;
    iconSrc : string;
    alt? : string;
    width? : number;
    height? : number;
}

export interface CardComponentProps {
    title : string;
    content? : string | null;
    url : string | undefined;
}

export interface LayoutProps {
    children : React.ReactNode
}

export interface SentenceProps {
    title : string,
    code : string | undefined,
}

