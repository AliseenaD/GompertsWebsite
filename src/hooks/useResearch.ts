import { useEffect, useState } from "react";
import { ResearchTopic } from "../types";

/**
 * A hook that takes the data from a passed in url and updates the research information states to 
 * be passed to components.
 * @param url - The url to draw the data from.
 */
export const useResearch = (url: string) => {
    const [researchData, setResearchData] = useState<ResearchTopic[]>([]);

    /**
     * A function that draws the research topic data from the json file in the url
     * and updates state.
     */
    const fetchResearchTopics = async () => {
        try {
            const response = await fetch(url);
            const researchJson = await response.json();
            setResearchData(researchJson["research"]);
        }
        catch (error) {
            console.error('There was an error while drawing the research information', error);
        }
    };

    /**
     * Fetches all research topics upon initial page load.
     */
    useEffect(() => {
        fetchResearchTopics();
    }, []);

    return { researchData };
};