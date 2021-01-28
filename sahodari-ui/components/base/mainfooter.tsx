import {Nav, Navbar} from "react-bootstrap";
import {BrandLink, NavLink} from "./link";
import LocalStorageClient from "../../utils/localstorageclient";
import useSWR from "swr";


const MainFooter = ({fixed=false}) => {
    const {data, error} = useSWR("access_token", LocalStorageClient);
    return <Navbar bg="warning" expand={true} fixed="bottom">
        <BrandLink href="/"><span className="logo">Sahodari</span></BrandLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            {data == null && <>
                <NavLink href="/about">For Nurse</NavLink>
                <NavLink href="/error">For Corporate</NavLink>
                <NavLink href="/login">temp@sahodari.org</NavLink>
            </>}
                {data != null && <>
                <NavLink href="/login">temp@sahodari.org</NavLink>
                </>}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
};

export default MainFooter;