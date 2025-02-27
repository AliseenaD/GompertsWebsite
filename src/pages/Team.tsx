import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResearchGroup from "../components/ResearchGroup";
import team from "../jsonFiles/team.json";

/**
 * Builds the team page.
 * @returns Team component.
 */
export default function Team() {
    return (
        <>
            <NavBar />
            <BannerImage title="Team" />
            <ResearchGroup title="Laboratory Research" team={team["Laboratory Research"]} />
            <div className="w-3/5 border-b-[1px] border-secondary-text-color my-8 mx-auto"></div>
            <ResearchGroup title="Clinical Research" team={team["Clinical Research"]} />
            <Footer />
        </>
    );
}