import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import HomeWelcome from "../components/HomeWelcome";
import NavBar from "../components/NavBar";
import SelectPublications from "../components/SelectPublications";
import publicationData from "../jsonFiles/selectPublications.json";

/**
 * Constructs all of the content needed on the Home page.
 * @returns Home page component
 */
export default function Home() {
    return (
        <div className="w-full font-sans">
            <NavBar />
            <BannerImage title='Gomperts Lab' />
            <HomeWelcome />
            <SelectPublications publications={publicationData.publications} />
            <Footer />
        </div>
    );
}