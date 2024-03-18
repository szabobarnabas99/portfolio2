import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:-h[98px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-2">
                    <Link href={"/"}>
                        <h1
                            priority={true}
                            className="text-white text-[1.5rem]"
                        >
                            szabo <span className="text-accent">.</span>{" "}
                            barnabas
                        </h1>
                    </Link>
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
