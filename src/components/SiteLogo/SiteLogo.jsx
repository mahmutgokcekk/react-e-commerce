import { Link } from "react-router";
import { FaFireFlameCurved } from "react-icons/fa6";
function SiteLogo() {
    return (
        <>
            <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 header-link justify-content-center align-items-center">
                <FaFireFlameCurved className='fs-3' style={{ color: '#FF5722' }} />
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <span style={{ color: '#333' }}>Zuko</span><span style={{ color: '#FF5722' }}>Shop</span>
                </span>

            </Link>
        </>
    );
}

export default SiteLogo;