import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BannerImageProps } from "../types";

/**
 * Constructs the BannerImage component with the given title that was passed to it.
 * @param param0 The title of the banner
 * @returns BannerImage component
 */
export default function BannerImage({ title }: BannerImageProps) {
    const [fontSize, setFontSize] = useState<string>('6rem');
    const [translateY, setTranslateY] = useState<number>(0);
    const bannerRef = useRef<HTMLDivElement>(null);
    const initialPositionRef = useRef<number | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    /**
     * Updates windowWidth whenever the window size changes.
     */
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /**
     * Updates font size whenever the size of windowWidth changes.
     */
    useEffect(() => {
        if (windowWidth <= 767) {
            setFontSize(`${Math.max(3, window.innerWidth / 130)}rem`)
        }
    }, [windowWidth]);

    /**
     * A function that dynamically handles the scrolling position of the background image to achieve
     * a 3D asthetic.
     */
    useEffect(() => {
        // Store the initial position of the banner when the component mounts
        if (bannerRef.current && initialPositionRef.current === null) {
            const rect = bannerRef.current.getBoundingClientRect();
            initialPositionRef.current = rect.top + window.scrollY;
        }

        // Handle the scrolling asthetics of the background image and text
        const handleScroll = () => {
            if (bannerRef.current && initialPositionRef.current) {
                const scrollPosition = window.scrollY;
                const bannerPosition = initialPositionRef.current;
                const bannerHeight = bannerRef.current.offsetHeight;
                const windowHeight = window.innerHeight;
                const relativeScroll = scrollPosition + windowHeight - bannerPosition;

                // Only apply effect when banner is in or near the viewport
                if (relativeScroll >= 0 && relativeScroll <= (windowHeight + bannerHeight)) {
                    const scrollPercentage =  relativeScroll / (windowHeight + bannerHeight);
                    const maxTranslate = 120;
                    setTranslateY(scrollPercentage * maxTranslate);
                }
            }
        };

        // Add handleScroll to event listener of scroll
        window.addEventListener('scroll', handleScroll);
        // Call handleScroll initially to set initial position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Fade triggerOnce direction="up">
            <div ref={bannerRef} className="relative h-[350px] overflow-hidden">
                <div 
                    className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(https://gompertslab.mgh.harvard.edu/wp-content/uploads/2025/05/BannerImage2.png)`,
                        transform: `translateY(${translateY}px)`,
                        transition: 'transform 0.1s ease-out',
                        height: '150%',
                        top: '-25%'
                    }}
                />
                <div className="relative z-10 h-full flex justify-center items-center">
                    <p 
                        style={{ fontSize: fontSize }} 
                        className="font-bold uppercase text-banner-color bg-transparent mix-blend-screen px-0.5 py-1 text-center"
                    >
                        {title}
                    </p>
                </div>
            </div>
        </Fade>
    );
}