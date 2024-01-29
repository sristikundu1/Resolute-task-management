import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-[#d8f3dc] text-[#2d6a4f]">
            <aside className="items-center grid-flow-col">
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.twitter.com"><FaTwitter className="text-[#34b7f1] text-2xl"></FaTwitter></a>
                <a href="https://www.youtube.com"><FaYoutube className="text-[#ff0000] text-2xl"></FaYoutube></a>
                <a href="https://www.facebook.com"><FaFacebook className="text-[#4285f4] text-2xl"></FaFacebook></a>
            </nav>
        </footer>
    );
};

export default Footer;