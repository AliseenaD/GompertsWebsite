import { Fade } from "react-awesome-reveal";

/**
 * Constructs all of the content needed in the JoinContent component.
 * @returns JoinContent component
 */
export default function JoinContent() {
    return(
        <Fade triggerOnce direction="up">
            <div className="w-full p-4 md:p-8 my-8">
                <p className="text-3xl text-text-main-color">Join Us</p>
                <div className="text-lg text-secondary-text-color p-4 md:p-8">
                    <p>
                        We are looking for a 
                        postdoc to work on systems level hippocampal physiology using tetrode and 
                        calcium imaging techniques in freely behaving rodents.
                    </p>
                    <p className="mt-4">
                        The applicant should have:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>A PhD in neuroscience, engineering or a related field</li>
                        <li>Strong experimental and problem solving abilities</li>
                        <li>Programming skills and experience with Matlab is a plus</li>
                    </ul>
                    <p className="mt-4">
                        If you are interested in applying, please send your CV, contact details 
                        of an academic reference, and a cover letter to: gomperts.stephen@mgh.harvard.edu
                    </p>
                </div>
            </div>
        </Fade>
    );
}