import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import JoinContent from "../components/JoinContent";
import NavBar from "../components/NavBar";

/**
 * Constructs all of the content needed on the Join page.
 * @returns Join page component
 */
export default function Join() {
    return (
        <>
            <NavBar />
            <BannerImage title="Join Us" />
            <JoinContent />
            <Footer />
        </>
    );
}