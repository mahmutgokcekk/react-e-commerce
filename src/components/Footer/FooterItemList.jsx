import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export function footerItemList() {
    const itemList = [
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/mahmut-g-a36852347/"
        },
        {
            icon: <FaSquareInstagram />,
            link: "https://www.instagram.com/mahmutgokcek/"
        }
    ];

    return itemList
}
