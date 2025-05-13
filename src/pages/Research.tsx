import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResearchTopics from "../components/ResearchTopics";
import ResearchWelcome from "../components/ResearchWelcome";
import { useResearch } from "../hooks/useResearch";

/**
 * Constructs all of the content needed on the research page.
 * @returns Research page component
 */
export default function Research() {
    const { researchData } = useResearch("https://gompertslab.mgh.harvard.edu/wp-content/reactpress/data/researchTopics.json");

    return (
        <>
            <NavBar />
            <BannerImage title="Research" />
            <ResearchWelcome />
            <ResearchTopics topics={researchData} />
            <Footer />
        </>
    );
}