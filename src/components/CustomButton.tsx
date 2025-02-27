import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { CustomButtonProps } from "../types";

/**
 * Creates the custom button component that takes a title and reference link.
 * @param param0 The title and reference link for the button.
 * @returns CustomButton component
 */
export default function CustomButton({ link, title }: CustomButtonProps) {
    const navigate = useNavigate();

    /**
     * Navigates to the passed in path and then scrolls to the top of the page.
     * @param path A path that refers to the page the button should navigate to.
     */
    const navigateAndScroll = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Fade triggerOnce direction="up">
            <div className="w-full relative flex justify-center mt-8">
                <button onClick={() => navigateAndScroll(link)}
                className="text-main-color hover:text-main-color-hover
                hover:border-main-color-hover border-main-color 
                uppercase text-lg transition-all duration-300 bg-transparent px-16
                text-center md:px-32">
                    {title}
                </button>
            </div>
        </Fade>
    );
}