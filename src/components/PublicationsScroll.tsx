import { Fade } from "react-awesome-reveal";
import { Publication, PublicationsProps } from "../types";
import PublicationCard from "./PublicationCard";

/**
 * Creates the publication scroll component that shows all publications that was passed in.
 * @param param0 Publications passed in to the component.
 * @returns PublicationScroll component
 */
export default function PublicationsScroll({ publications }: PublicationsProps) {

    /**
     * Reduces the publications into a dictionary in which each publication is stored
     * in a respective date key
     */
    const publicationsByYear = publications.reduce<Record<string, Publication[]>>((acc, publication) => {
        const year = publication.date;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(publication);
        return acc;
    }, {});

    const sortedPublications = Object.keys(publicationsByYear).sort((a,b) => parseInt(b) - parseInt(a));

    return(
        <div className="w-full p-4 md:p-10">
            {sortedPublications.map(year => (
                <div key={year} className="my-8">
                    <Fade triggerOnce direction="up" delay={300}>
                        <p className="text-4xl text-main-color font-bold mb-8">
                            {year}
                        </p>
                    </Fade>
                    {publicationsByYear[year].map((article: Publication) => (
                        <PublicationCard key={article.title} 
                        title={article.title} authors={article.authors} 
                        journal={article.journal} date={article.date}
                        doi={article.doi} link={article.link} />
                    ))}
                </div>
            ))}
        </div>
    );
}