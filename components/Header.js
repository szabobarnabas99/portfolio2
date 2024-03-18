import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:-h[98px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-2">
                    <Link href={"/"}>
                        <Image
                            src={"/brnbs.svg"}
                            width={300}
                            height={300}
                            alt=""
                            priority={true}
                            className="text-white"
                        />
                    </Link>
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
