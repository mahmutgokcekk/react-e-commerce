import { Outlet } from 'react-router';
import { Container } from 'react-bootstrap';
function AuthLayout() {
  return (

    <>
      <Container>
        <Outlet />
      </Container>
    </>

  );
}

export default AuthLayout;