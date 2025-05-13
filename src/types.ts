/**
 * Defines the information that makes up a publication.
 */
export interface Publication {
    title: string;
    authors: string[];
    journal: string;
    date?: string;
    doi?: string;
    link: string;
}

/**
 * Defines the publication props being passed to the component.
 * Includes link to the publication, authors associated with it, and 
 * additional information containing information like journal, pub date, etc.
 */
export interface PublicationsProps {
    publications: Publication[];
}

/**
 * An interface for each research topic that makes up the 
 * ResearchTopicsProps
 */
export interface ResearchTopic {
    title: string;
    picture: string;
    description: string;
}

/**
 * An interface for the ResearchTopics props that will be passed to the component.
 */
export interface ResearchTopicsProps {
    topics: ResearchTopic[];
}

/**
 * An interface defining all the components of 
 * the CustomButton props
 */
export interface CustomButtonProps {
    link: string;
    title: string;
}

/**
 * Props for the banner image component.
 */
export interface BannerImageProps {
    title: string;
}

/**
 * An interface defining a section of the lab made up by
 * a list of team members.
 */
export interface LabGroup {
    title: string;
    team: TeamMember[];
}

/**
 * A interface defining all of the characteristics of a team member.
 */
export interface TeamMember {
    name: string;
    title: string;
    biography: string;
    photo: string;
}