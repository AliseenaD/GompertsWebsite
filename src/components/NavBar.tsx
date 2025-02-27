import { ReactNode, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

/**
 * NavLink props
 */
interface NavLinkProps {
    to: string;
    children: ReactNode;
}

/**
 * The navbar for the website. Has a dropdown menu whenever screen gets smaller than 767 pixels
 * @returns NavBar component
 */
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    /**
     * Handles the changing of the navbar depending on the size of the window screen
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /**
     * Returns a navbar link with passed title and path
     * @param param0 The path and any children that the navlink should contain
     * @returns NavLink component
     */
    const NavLink = ({ to, children }: NavLinkProps) => {
        return (
            <Link 
                className="text-lg hover:text-gray-500 font-normal text-text-blue duration-300" 
                to={to}
            >
                {children}
            </Link>
        );
    };

    return (
        <Fade triggerOnce direction="up">
            <nav className="relative bg-transparent">
                <div className="px-10 py-3.5 flex justify-between items-center">
                    <NavLink to="/">Gomperts Lab</NavLink>
                    
                    <div className="flex items-center">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="md:hidden flex flex-col gap-1.5 bg-transparent p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-0.5 bg-text-blue"></div>
                            <div className="w-6 h-0.5 bg-text-blue"></div>
                            <div className="w-6 h-0.5 bg-text-blue"></div>
                        </button>

                        <div className="hidden md:flex gap-12">
                            <NavLink to="/research">Research</NavLink>
                            <NavLink to="/team">Team</NavLink>
                            <NavLink to="/publications">Publications</NavLink>
                            <NavLink to="/join">Join Us</NavLink>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`
                        md:hidden 
                        overflow-hidden 
                        transition-[max-height] duration-300 ease-in-out
                        ${menuOpen ? 'max-h-64' : 'max-h-0'}
                    `}
                >
                    <div className="shadow-lg">
                        <div className="flex flex-col gap-4 px-10 py-4">
                            <NavLink to="/research">Research</NavLink>
                            <NavLink to="/team">Team</NavLink>
                            <NavLink to="/publications">Publications</NavLink>
                            <NavLink to="/join">Join Us</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </Fade>
    );
}