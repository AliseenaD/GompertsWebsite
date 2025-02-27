import { Fade } from "react-awesome-reveal";
import CustomButton from "./CustomButton";
import { PublicationsProps } from "../types";
import SelectPublicationCard from "./SelectPublicationCard";

/**
 * Creates the SelectPublications component. Takes all the publications passed to it
 * to do so.
 * @param param0 A list of publications.
 * @returns SelectPublications component
 */
export default function SelectPublications({ publications }: PublicationsProps) {

    return (
        <Fade triggerOnce direction="up">
            <div className="p-3 md:p-10 w-full">
                <p className="uppercase text-main-color font-bold text-4xl">
                    Select publications
                </p>
                <div className="flex flex-col gap-8 justify-center my-8">
                    {publications.map(publication => (
                        <SelectPublicationCard key={publication.doi} title={publication.title} 
                        authors={publication.authors} journal={publication.journal} date={publication.date} 
                        doi={publication.doi} link={publication.link}
                        />
                    ))}
                </div>
                <CustomButton link="/publications" title="Publications" />
            </div>
        </Fade>
    );
}