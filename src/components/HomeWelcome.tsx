import { Fade } from "react-awesome-reveal";
import CustomButton from "./CustomButton";

/**
 * Creates and styles the home welcome component.
 * @returns HomeWelcome component
 */
export default function HomeWelcome() {
    return (
        <Fade triggerOnce direction="up">
            <div className="flex justify-between items-center flex-wrap my-8">
                <div className="md:w-2/3 p-3 md:p-10 w-full">
                    <p className="uppercase text-main-color font-bold text-4xl">
                        Welcome
                    </p>
                    <p className="font-light mt-4 text-lg">Dr. Gomperts’ basic and clinical research focuses on Parkinson’s disease, dementia with Lewy bodies, 
                        and Alzheimer’s disease. In human studies, he is working to understand the causes of cognitive impairment 
                        that can arise in these diseases with PET imaging of pathogenic processes, such as the accumulation of beta-amyloid 
                        and tau and the loss of dopamine neurons projecting to brain regions that subserve cognition. In animal models, 
                        he uses large scale, multi-electrode recordings of brain cell activity together with optogenetic tools to investigate 
                        normal brain function and develop treatments to restore brain function in these diseases.
                    </p>
                    <CustomButton link="/research" title="Research" />
                </div>
                <div className="w-full p-5 flex justify-center items-center md:w-1/3 md:p-10">
                    <img src="https://gompertslab.mgh.harvard.edu/wp-content/uploads/2025/05/gomperts.jpeg" alt="Gomperts Photo" className="w-[60%] h-auto rounded-full shadow-sm md:w-[90%]"></img>
                </div>
            </div>
        </Fade>
    );
}