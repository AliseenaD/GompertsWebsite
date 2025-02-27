import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResearchTopics from "../components/ResearchTopics";
import ResearchWelcome from "../components/ResearchWelcome";
import researchTopics from "../jsonFiles/researchTopics.json";

/**
 * Constructs all of the content needed on the research page.
 * @returns Research page component
 */
export default function Research() {
    return (
        <>
            <NavBar />
            <BannerImage title="Research" />
            <ResearchWelcome />
            <ResearchTopics topics={researchTopics.research} />
            <Footer />
        </>
    );
}