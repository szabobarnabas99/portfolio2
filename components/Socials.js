import Link from "next/link";
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiLinkedinLine,
    RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link
                href={"https://github.com/szabobarnabas99"}
                className="hover:text-accent transition-all duration-300"
            >
                <RiGithubLine />
            </Link>

            <Link
                href={
                    "https://hu.linkedin.com/in/barnab%C3%A1s-szab%C3%B3-71a024252?trk=people-guest_people_search-card"
                }
                className="hover:text-accent transition-all duration-300"
            >
                <RiLinkedinLine />
            </Link>
        </div>
    );
};

export default Socials;
