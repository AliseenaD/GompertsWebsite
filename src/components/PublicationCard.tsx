import { Fade } from "react-awesome-reveal";
import { Publication } from "../types";
import { LiaGlobeSolid } from "react-icons/lia";


/**
 * Creates each singular article component by taking in the article information.
 * @param param0 Article information including title, authors, journal, date, doi, and link.
 * @returns SingularPublication component
 */
export default function PublicationCard({ title, authors, journal, date, doi, link }: Publication) {
    const authorsString = authors.join(', ').replace(', ...', '');
    
    return(
        <Fade triggerOnce direction="up">
            <div className="flex flex-col my-4">
                <p className="text-xl text-text-main-color">{title}</p> 
                <p className="text-lg text-secondary-text-color font-light">{authorsString}</p>
                <p className="text-lg text-secondary-text-color font-light">{journal}</p>
                <a href={link} className="mt-2 p-1 border-main-color text-text-main-color 
                hover:text-text-blue-hover flex justify-center items-center gap-1 border-[1px] rounded-md w-20
                hover:border-main-color-hover" 
                target="_blank"><LiaGlobeSolid size={20} />Link</a>
            </div>
        </Fade>
    );
}