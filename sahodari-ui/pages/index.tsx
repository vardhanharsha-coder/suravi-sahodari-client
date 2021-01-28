import {Button, Col, Container, Row} from 'react-bootstrap';
import Image from "next/image";
import WithMainNavBarAndFooter from "../layout/withmainnavbarandfooter";

const Page = () => <WithMainNavBarAndFooter fixed={true}>
    <Row>
        <Col className="d-flex align-items-center">
            <Container className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <Col>
                        <h4>Sahodari Portal</h4>
                    </Col>
                    <Col>
                        <p>The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science. He to whom this emotion is a stranger, who can no longer pause to wonder and stand rapt in awe, is as good as dead: his eyes are closed.</p>
                    </Col>
                    <Col>
                        <Button size={"lg"} variant={"warning"}>Get Involved</Button>
                    </Col>
                </div>
            </Container>
        </Col>
        {/* <Col style={{height:"calc(100vh)"}}>
            <Image src="/images/nurse1.png" objectFit="cover" layout="fill"/>
        </Col> */}
    </Row>
</WithMainNavBarAndFooter>

export default Page;
