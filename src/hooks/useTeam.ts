import { useEffect, useState } from "react";
import { TeamMember } from "../types";

/**
 * A hook that provides all of the functionality necessary for obtaining team members from the team.
 * @param url - The url to fetch the data from.
 */
export const useTeam = (url: string) => {
    const[labData, setLabData] = useState<TeamMember[]>([]);
    const[clinicalData, setClinicalData] = useState<TeamMember[]>([]);

    /**
     * Fetches the team data from the team json file located within the wp-content
     * and assigns the data to the correct lab groups.
     */
    const fetchTeamData = async () => {
        try {
            const response = await fetch(url);
            const teamData = await response.json();
            setLabData(teamData["Laboratory Research"]);
            setClinicalData(teamData["Clinical Research"])
        }
        catch (error) {
            console.error('There was an error while fetching team member information', error);
        }
    };

    /**
     * Fetch the team json information from the wp-content files on initial page load
     */
    useEffect(() => {
        fetchTeamData();
    }, []);

    return {
        labData,
        clinicalData
    }
};