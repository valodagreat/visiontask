import React from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../../redux/User/userActions';

function Header() {

    const dispatch = useDispatch()
    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo} = userLogin

    const logoutHandle = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >VisionNFTS</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer onClick={logoutHandle}  to='/login'>
                            <Nav.Link ><i className="fas fa-user" style={{fontSize: "24px"}} ></i> Logout</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
