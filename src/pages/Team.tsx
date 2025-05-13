import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResearchGroup from "../components/ResearchGroup";
import { useTeam } from "../hooks/useTeam";

/**
 * Builds the team page.
 * @returns Team component.
 */
export default function Team() {
    const { labData, clinicalData } = useTeam("https://gompertslab.mgh.harvard.edu/wp-content/reactpress/data/team.json");

    return (
        <>
            <NavBar />
            <BannerImage title="Team" />
            <ResearchGroup title="Laboratory Research" team={labData} />
            <div className="w-3/5 border-b-[1px] border-secondary-text-color my-8 mx-auto"></div>
            <ResearchGroup title="Clinical Research" team={clinicalData} />
            <Footer />
        </>
    );
}