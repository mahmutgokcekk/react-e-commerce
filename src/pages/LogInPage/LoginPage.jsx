import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Col, Row, Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase/firebase';
import { ImGoogle2 } from "react-icons/im";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/slices/commerceSlice/commerceSlices";

const formElements = [
    {
        controlId: "floatingEmail",
        label: "E-mail",
        type: "email",
        placeholder: "E-mail"
    },
    {
        controlId: "floatingPassword",
        label: "Şifre",
        type: "password",
        placeholder: "Şifre"
    }
];


function LoginPage() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const provider = new GoogleAuthProvider();
    const user = auth.currentUser;

    const notify = (message, type) => toast[type](message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const googleAuth = async () => {
        try {
            await signInWithPopup(auth, provider);
            notify("Giriş başarılı", "success");
            navigate("/");
        } catch (error) {
            notify("Bit hata oluştu " + error, "error");
        }

        if (user) (
            console.log(user)
        );

    };

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            notify("Giriş başarılı", "success");
            navigate("/");
        } catch (error) {
            notify("Bit hata oluştu " + error, "error");
        }

        if (user) (
            dispatch(addAuth(user.email))
        );

    };

    return (
        <>
            <Row sm={2} className='justify-content-center align-items-center' >
                <Col>
                    <Row className='shadow rounded '>
                        <Col xs="6" className='p-0'>
                            <Link to="/auth/sign-up">
                                <Button className='w-100 bg-secondary border-0 rounded-bottom-0'>
                                    Kayıt Ol
                                </Button>
                            </Link>

                        </Col>
                        <Col xs="6" className='p-0' >
                            <Link to="/auth/log-in">
                                <Button className='w-100 border-0 bg-white text-dark rounded-bottom-0' >
                                    Üye Girişi
                                </Button>
                            </Link>
                        </Col>
                        <Col sm="12 p-5">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    formElements.map((element, index) => (
                                        <FloatingLabel className='mb-2' controlId={element.controlId} label={element.label} key={index}>
                                            <Form.Control type={element.type} placeholder={element.placeholder} {...register(element.type)} required />
                                        </FloatingLabel>
                                    ))
                                }
                                <Button type='submit' variant='primary' className='w-100'>Giriş yap</Button>
                                <div className='text-center mt-3'>
                                    <p>veya</p>
                                    <Button className='border-light-subtle card-border bg-white align-items-center p-2' onClick={googleAuth}>
                                        <ImGoogle2 className='text-danger fs-3 me-2' />
                                        <span className='text-dark'>Google ile giriş yap</span>
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ToastContainer />
        </>
    );
}

export default LoginPage;