import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/AkbarRizkyR" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/akbar-rizky-rabbani-a66a20148/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCMOukWZhRPoGIuC64mvso3A" },
    { icon: <FaTwitter />, path: "https://twitter.com/Akbarrizki0098" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
