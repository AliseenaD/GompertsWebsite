import { Fade } from "react-awesome-reveal";
import { Publication } from "../types";

/**
 * Creates each publication card component by taking all necessary information regarding
 * the publication.
 * @param param0 The information of the publication.
 * @returns SelectPublication component
 */
export default function SelectPublicationCard({ title, authors, journal, date, doi, link }: Publication) {
    // Join all the authors into one string
    const authorsString = authors.join(', ');

    return (
        <Fade triggerOnce direction="up">
            <div className="p-5 md:p-10 w-full mx-auto bg-zinc-100 rounded-md shadow-md">
                <a className="text-xl text-text-main-color hover:text-text-blue-hover" href={link} target="_blank">{title}.</a>
                <div className="mt-4">
                    <p className="text-lg text-secondary-text-color font-light">{authorsString}</p>
                    <p className="text-lg text-secondary-text-color font-li">{journal}, {date}, doi:{doi}</p>
                </div>
            </div>
        </Fade>
    );
}