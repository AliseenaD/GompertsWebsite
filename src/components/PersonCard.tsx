import { Fade } from "react-awesome-reveal";
import { TeamMember } from "../types";

/**
 * Constructs a team member's card with all of their passed in information.
 * @param param0 All of the team member's information including name, title, biography, and picture
 * @returns PersonCard component
 */
export default function PersonCard({ name, title, biography, photo }: TeamMember) {
    console.log(name, title, biography, photo);
    return(
        <Fade triggerOnce direction="up">
            <div className="flex flex-col md:flex-row justify-left items-center gap-8 p-4 md:p-8">
                {
                    photo ? 
                    (
                        <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                            <img src={photo} alt={name} className="w-full h-full object-cover"/>
                        </div>
                    ) : 
                    (
                        <div className="w-60 h-60 rounded-full bg-gray-200 flex-shrink-0 shadow-md flex items-center justify-center">
                            <span className="text-gray-400 text-3xl">{name.charAt(0)}</span>
                        </div>
                    )
                }
                <div className="flex flex-col gap-4">
                    <p className="text-text-main-color text-xl font-normal">{name}, {title}</p>
                    {
                        biography ? (
                            <p className="text-secondary-text-color text-lg font-light">{biography}</p>
                        ) : ''
                    }
                </div>
            </div>
        </Fade>
    );
}