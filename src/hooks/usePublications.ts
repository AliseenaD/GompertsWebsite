import { useEffect, useState } from "react"
import { Publication } from "../types";

/**
 * A hook that retrieves all of the information from the select publications file
 * and stores it to pass into components.
 * @param url - The url to fetch the data from
 */
export const usePublications = (url: string) => {
    const [publicationsData, setPublicationsData] = useState<Publication[]>([]);

    /**
     * A function that fetches all of the publications from the url and sets
     * the publicationsData to it.
     */
    const fetchPublications = async () => {
        try {
            const response = await fetch(url);
            const publicationsJson = await response.json();
            setPublicationsData(publicationsJson["publications"]);
        }   
        catch (error) {
            console.error("An error occurred while retrieving select publications data", error);
        }
    };

    /**
     * Fetches all of the publications upon initial page load.
     */
    useEffect(() => {
        fetchPublications();
    }, []);

    return { publicationsData };
};