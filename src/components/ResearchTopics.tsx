import { ResearchTopicsProps } from "../types";
import ResearchTopicCard from "./ResearchTopicCard";

/**
 * Constructs the research topic collection of cards by taking a list of the topics.
 * @param param0 A list of research topics.
 * @returns ResearchTopics component
 */
export default function ResearchTopics({ topics }: ResearchTopicsProps) {
    return(
        <>
            <div className="flex flex-col gap-8 mt-16">
                {topics.map(topic => (
                    <ResearchTopicCard key={topic.title} title={topic.title} picture={topic.picture} description={topic.description} />
                ))}
            </div>
        </>
    );
}