import { Fade } from "react-awesome-reveal";
import { LabGroup } from "../types";
import PersonCard from "./PersonCard";

/**
 * Constructs all of the members associated in a research group given the props
 * of the group name and associated members.
 * @param param0 LabGroup props inluding title of the group and the members associated with it.
 * @returns ResearchGroup component
 */
export default function ResearchGroup({ title, team }: LabGroup) {
    return(
        <Fade triggerOnce direction="up">
            <div className="w-full p-4 md:p-8 my-4">
                <p className="text-text-main-color text-3xl font-normal">{title}</p>
                {team.map(member => (
                    <PersonCard key={member.name} name={member.name} title={member.title} photo={member.photo} biography={member.biography} />
                ))}
            </div>
        </Fade>
    );
}