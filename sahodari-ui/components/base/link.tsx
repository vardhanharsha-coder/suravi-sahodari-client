import Link from "next/link";
import {Nav, Navbar} from "react-bootstrap";

const MyLink = (Component) => ({href, children, ...props}) => {
    return <Link href={href} passHref>
        <Component {...props}>
            { children }
        </Component>
    </Link>
};

export default MyLink;
export const BrandLink = MyLink(Navbar.Brand);
export const NavLink = MyLink(Nav.Link);
