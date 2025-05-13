import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

/**
 * Constructs the footer element.
 * @returns Footer component.
 */
export default function Footer() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    /**
     * Handles the resize of the window by adjusting windowWidth to determine presence of 
     * certain divs.
     */
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Fade triggerOnce direction="up">
            <div className="mt-8 w-full h-[250px] bg-secondary-container-color flex justify-between items-center">
                {windowWidth > 767 ? (
                    <img src={"https://gompertslab.mgh.harvard.edu/wp-content/uploads/2025/05/MGH.png"} alt="MGH Logo" style={{height: '200px'}} className="px-16"></img>    
                ) : ''}
                <div className="text-md px-4 md:text-lg md:px-16 text-text-blue">
                    <p>Mass General Institute for Neurodegenerative Disease</p>
                    <p>Massachusetts General Hospital</p>
                    <p>114 16th Street, Room 2004</p>
                    <p>Charlestown, MA 02129</p>
                    <p>Email: Gomperts.stephen@mgh.harvard.edu</p>
                    <p>Phone: 617-726-5570</p>
                </div>
            </div>
        </Fade>
    );
}