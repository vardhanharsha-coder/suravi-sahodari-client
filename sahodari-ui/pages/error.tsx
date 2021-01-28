import {Button, Col, Container, Row} from 'react-bootstrap';
import Image from "next/image";
import WithMainNavBarAndFooter from "../layout/withmainnavbarandfooter";

const Page = () => <WithMainNavBarAndFooter fixed={true}>
    <Row>
        <Col className="d-flex align-items-center" >
            <Container className="d-flex justify-content-center" >
                <div className="d-flex flex-column">
                    <Col>
                        <h1>Comming Soon</h1>
                    </Col>
                    <Col>
                        <p>The page is still under development</p>
                    </Col>
                    {/* <Col>
                        <Button size={"lg"} variant={"warning"} href="/second-step">Join with us</Button>
                    </Col> */}
                </div>
            </Container>
        </Col>
        {/* <Col style={{height:"calc(100vh)"}} className="about-img">
            <Image src="/images/nurse1.png"  layout="fill"/>
            <img src="/images/doctor2.jpg" alt="Cinque Terre" width="300" height="400"/>
        </Col> */}
    </Row>
</WithMainNavBarAndFooter>

export default Page;
