import {Button, Col, Container, Row} from 'react-bootstrap';
import Image from "next/image";
import WithMainNavBarAndFooter from "../layout/withmainnavbarandfooter";

const Page = () => <WithMainNavBarAndFooter fixed={true}>
    <Row>
        <Col className="d-flex align-items-center" >
            <Container className="d-flex justify-content-center" >
                <div className="d-flex flex-column">
                    <Col>
                        <h4>About Sahodari Foundation</h4>
                    </Col>
                    <Col>
                        <p>Sahodari Foundation is a pioneer organization in India which has been voicing for transgender and gender non binary community of India since 2007.</p>
                        <p>The organization is a movement, a family, and a team of young transgender people. Sahodari was founded by transgender rights activist, artist and writer Kalki Subramaniam (www.kalkisubramaniam.com).</p>
                        <p>Registered as an organisation in 2008, Sahodari Foundation does not believe in a regular organization structure, we work with minimum infrastruchture. We have completed 12 years and have been very active in transgender rights advocacy in India. Since 2012, our focus was on legal recognition and we campaigned in many places in India among the Judiciary for legal recognition. From 201 7, our focus is on knowledge and education, arts & literature and enabling tech knowledge to transgender people in the country.</p>

                    </Col>
                    <Col>
                        <Button size={"lg"} variant={"warning"} href="/second-step">Join with us</Button>
                    </Col>
                </div>
            </Container>
        </Col>
        <Col style={{height:"calc(100vh)"}} className="about-img">
            <Image src="/images/nurse1.png"  layout="fill"/>
            <img src="/images/doctor2.jpg" alt="Cinque Terre" width="300" height="400"/>
        </Col>
    </Row>
</WithMainNavBarAndFooter>

export default Page;
