import {
    Image,
    Nav,
    Navbar,NavDropdown
} from 'react-bootstrap';
import {BrandLink, NavLink} from "./link";
import useSWR from "swr";
import LocalStorageClient from "../../utils/localstorageclient";

const MainNavBar = ({fixed=false}) => {
    const {data, error} = useSWR("access_token", LocalStorageClient);
    return <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="/" className="logo">Sahodari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="mr-5">
                {data == null && <>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/second-step">Register</NavLink>
                    <NavLink href="/login">Login</NavLink>
                </>}
                {data != null && <>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <img src="/images/profile.png" className="rounded-circle" width="35" height="35"/> 
                </>}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}


export default MainNavBar;
