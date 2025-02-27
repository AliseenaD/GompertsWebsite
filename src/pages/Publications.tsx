import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PublicationsScroll from "../components/PublicationsScroll";
import publications from "../jsonFiles/allPublications.json";

/**
 * Constructs all of the content needed on the publication page.
 * @returns Publication page component
 */
export default function Publications() {
    return (
        <>
            <NavBar />
            <BannerImage title="Publications" />
            <PublicationsScroll publications={publications.publications} />
            <Footer />
        </>
    );
}