export interface IconWithLinkProps {
    linkUrl? : string;
    iconSrc : string;
    alt? : string;
    width? : number;
    height? : number;
}

export interface CardComponentProps {
    title : string;
    content? : Array<React.ReactNode>;
    url? : string | undefined;
    padding? : number;
    dark? : boolean;
}

export interface LayoutProps {
    children : React.ReactNode;
    color? : string;
}

export interface SentenceProps {
    content? : string,
    bold? : string | undefined,
}

export interface BadgeProps {
    iconSrc : string;
    title : string;
    value : string;
}

export interface ProjectProps {
    image? : string, 
    content : string,
    title : string,
    //담당
    job : string,
    feeling : string,
  }