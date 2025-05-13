import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PublicationsScroll from "../components/PublicationsScroll";
import { usePublications } from "../hooks/usePublications";

/**
 * Constructs all of the content needed on the publication page.
 * @returns Publication page component
 */
export default function Publications() {
    const { publicationsData } = usePublications("https://gompertslab.mgh.harvard.edu/wp-content/reactpress/data/allPublications.json");

    return (
        <>
            <NavBar />
            <BannerImage title="Publications" />
            <PublicationsScroll publications={publicationsData} />
            <Footer />
        </>
    );
}