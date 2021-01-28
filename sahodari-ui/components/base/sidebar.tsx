import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import { NavLink } from "./link";

const SideBar = ({children}) => <Container fluid>
    <Row>
        <Col xl={2} md={3} className="pl-0 pr-0 rounded-right">
            <Card className="rounded-right position-fixed" >
                <Card.Header style={{"backgroundColor":"#FFEFDF", height:'50em'}}>
                    <Nav className="flex-column pb-5" defaultActiveKey="/home">
                        <div className="h6">Profile</div>
                        <hr className="hrline"/>
                        <NavLink className="text-dark h5 font-weight-bold" href="/profile">Personal Info</NavLink>
                        <NavLink className="text-dark h6 font-weight-normal" href="/home">Messages</NavLink>
                        <div className="h6">Grants</div>
                        <hr className="hrline"/>
                        <NavLink className="text-dark h6 font-weight-normal" href="/shop">Request a Grant</NavLink>
                        <NavLink className="text-dark h6 font-weight-normal" href="#link-2">Grants Received</NavLink>
                        {/* <NavLink className="text-dark h6 font-weight-normal" href="#disabled" disabled>
                            Disabled
                        </NavLink> */}
                    </Nav>
                </Card.Header>
            </Card>
        </Col>
        <Col>
            { children }
        </Col>
    </Row>
</Container>

export default SideBar;