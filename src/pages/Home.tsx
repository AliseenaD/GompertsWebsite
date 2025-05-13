import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import HomeWelcome from "../components/HomeWelcome";
import NavBar from "../components/NavBar";
import SelectPublications from "../components/SelectPublications";
import { usePublications } from "../hooks/usePublications";

/**
 * Constructs all of the content needed on the Home page.
 * @returns Home page component
 */
export default function Home() {
    const { publicationsData } = usePublications("https://gompertslab.mgh.harvard.edu/wp-content/reactpress/data/selectPublications.json");

    return (
        <div className="w-full font-sans">
            <NavBar />
            <BannerImage title='Gomperts Lab' />
            <HomeWelcome />
            <SelectPublications publications={publicationsData} />
            <Footer />
        </div>
    );
}