import WithMainNavBar from "../layout/withmainnavbar";
import {Container, Button, Form, Col, Spinner, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from 'axios';
import {NavLink} from "../components/base/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import WithMainNavBarAndFooter from "../layout/withmainnavbarandfooter";

const Page = () => {
    const router = useRouter();
    const {register, handleSubmit} = useForm();

    const [calledApi, setCalledApi] = useState(false);
    const [inProgress, setInprogress] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token != null) router.replace("/profile");
    }, []);

    let loginAction = async ({username, password}) => {
        setCalledApi(true);
        setInprogress(true);
        try {
            const response = await axios.post('http://dev-api.sahodari.life/api/v1/token/', {
                username,
                password
            });
            if (response.status == 200) {
                localStorage.setItem("access_token", response.data['access']);
                localStorage.setItem("refresh_token", response.data['refresh']);
                router.replace("/profile");
            }
        } catch (e) {
            setInprogress(false);
            setCalledApi(false);
        }
    }

    let renderLogin = <WithMainNavBarAndFooter>
        <Container>
            <Row className="">
                <Col  xs={10} sm={8} md={7} lg={5} className="d-flex align-items-center">
                <div className="d-flex flex-column align-middle">
                    <Col>
                        <h4>Sahodari Portal</h4>
                    </Col>
                    <Col>
                        <p>To support nurses and to address challenges faced by them during COVID-19 and post the pandemic, creating a digital platform is being proposed. The platform will be hosted at sahodari.life and maintained by SOCHARA. Going forward, it will have a provision to on-board other Corporates and donor organizations</p>
                    </Col>
                </div>
                </Col>
                <Col>
                <div className="d-flex flex-row justify-content-end">
                <Col className="ma-5" xs={10} sm={8} md={7} lg={6}>
                    <Form onSubmit={handleSubmit(loginAction)} className="login-form">
                    <Col className="d-flex flex-row justify-content-center mb-3">
                        <h2>Sahodari</h2>
                    </Col>
                        <Form.Group controlId="formBasicUsername">
                            {/* <Form.Label>Username</Form.Label> */}
                            <Form.Control ref={register} name="username" type="text"
                                          placeholder="Email Address"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control ref={register} name="password" type="password"
                                          placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <div className="forgot-pass">Forgotten your password? Click here.</div>
                        </Form.Group>
                        <Row className="d-flex flex-row justify-content-center">
                        <Button variant="primary btn-lg" type="submit" className="login">
                            Login →
                        </Button>
                        </Row>
                        <Row className="d-flex flex-row justify-content-end">
                            <NavLink className="forgot-pass" href="/second-step">Or Sign Up →</NavLink>
                        </Row>
                    </Form>
                </Col>
            </div>
                </Col>
            </Row>
        </Container>
    </WithMainNavBarAndFooter>;

    return <>
        {!calledApi && renderLogin}
        {calledApi && inProgress && <Spinner animation="grow" role="status" variant="success">
            <span className="sr-only">Loading...</span>
        </Spinner>}
    </>;
}

export default Page;