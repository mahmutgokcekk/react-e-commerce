import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export function headerLinkList() {
    const { basket, favorites } = useSelector((state) => state.commerce);

    const headerList = [
        {
            link: "favorites",
            name: "Favoriler",
            icon: <FaHeart size={20} />,
            isHave: favorites.length > 0 && favorites.length
        },
        {
            link: "basket",
            name: "Sepet",
            icon: <FaShoppingCart size={20} />,
            isHave: basket.length > 0 && basket.length
        },

    ];

    return headerList;
}
