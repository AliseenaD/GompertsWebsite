import { Fade } from "react-awesome-reveal";
import { ResearchTopic } from "../types";

/**
 * Constructs each topic component and formats the information.
 * @param param0 the title, picture, and description of the research topic.
 * @returns ResearchTopic component
 */
export default function ResearchTopicCard({ title, picture, description }: ResearchTopic) {
    return(
        <Fade triggerOnce direction="up">
            <div className="relative mx-auto w-full bg-zinc-100 rounded-none md:rounded-md md:w-10/12 shadow-md p-8">
                <p className="text-text-main-color text-2xl">{title}</p>
                <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8">
                    <img className="rounded-sm shadow-sm" style={{width: '350px', height: 'auto'}} src={picture} alt={`${title} picture`}></img>
                    <p className="font-light text-secondary-text-color md:w-3/4 text-lg">{description}</p>
                </div>
            </div>
        </Fade>
    );
}