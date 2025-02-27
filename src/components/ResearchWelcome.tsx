import { Fade } from "react-awesome-reveal";

export default function ResearchWelcome() {
    return (
        <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-16 px-8 md:px-16 text-3xl w-full md:w-5/6 text-text-main-color font-light">
                Our work is focused on 
                the study of Dementia with Lewy Bodies, Alzheimer’s, and Parkinson’s, 
                dissected through a vertically organized program that extends from bench 
                to bedside.
            </p>
        </Fade>
    );
}