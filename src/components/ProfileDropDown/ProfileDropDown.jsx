import { NavDropdown, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slices/commerceSlice/commerceSlices';
import { useNavigate } from 'react-router';
function ProfileDropDown({ auth }) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    function logOutUser() {
        dispatch(logOut(""));
    }
    return (
        <>
            <NavDropdown
                id="nav-dropdown"
                title={<FaUser size={19} />}
                menuVariant="light"
                align="end"
                style={{ content: "none" }}
            >
                <NavDropdown.Item  className='d-flex bg-white'>
                    {auth === "" || null ? <Button variant="success" className='w-100' onClick={()=>navigate("/auth/sign-up")} > Giriş Yap </Button> : auth}
                </NavDropdown.Item>
                {
                    auth !== "" ? <NavDropdown.Item className='d-flex justify-content-center bg-white'>
                        <Button variant="danger" className='w-100' onClick={logOutUser}> Çıkış yap</Button>
                    </NavDropdown.Item> : <></>
                }
            </NavDropdown>
        </>
    );
}

export default ProfileDropDown;