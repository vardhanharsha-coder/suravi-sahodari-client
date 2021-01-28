import WithMainNavBar from "../layout/withmainnavbar";
import {Container, Button, Form, Col, Spinner, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from 'axios';
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import WithMainNavBarAndFooter from "../layout/withmainnavbarandfooter";
import Image from "next/image";

const Page = () => {
    const {register, handleSubmit, errors} = useForm();

    const [calledApi, setCalledApi] = useState(false);
    const [inProgress, setInprogress] = useState(false);
    const [successful, setSuccessful] = useState(false);

    let registerAction = async ({email, username, location , phone , password, passwordConfirm}) => {
        setCalledApi(true);
        setInprogress(true);
        
        const response = await axios.post('http://dev-api.sahodari.life/api/v1/accounts/register/', {
            email,
            username,
            location,
            phone,
            password,
            password_confirm: passwordConfirm,
            user_type: 'nurse'
        });
        setInprogress(false);
        setSuccessful(response.status == 201);
    }

    let registerForm = <WithMainNavBarAndFooter>
        <Container>
            <Row className="pb-5">
                <Col  xs={10} sm={8} md={7} lg={5} className="d-flex align-items-center">
                <div className="d-flex flex-column align-middle">
                    <div className="h3 font-weight-bold">
                    Let’s get some basic information.
                    </div>
                <Col style={{height:"calc(100vh)"}} >
                  <img src="/images/doctor.png" alt="Cinque Terre" width="200" height="300"/>
                </Col>
                </div>
                </Col>
                <Col>
                <div className="d-flex flex-row justify-content-center">
                <Col className="" xs={10} sm={8} md={7} lg={8}>
                    <Form onSubmit={handleSubmit(registerAction)} className="login-form">
                    {/* <Col>
                        <h2>Sahodari</h2>
                    </Col> */}
                        <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" isInvalid={errors.username} ref={register({required: '* required'})} name='username'
                                      placeholder="Username"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.username && errors.username.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" isInvalid={errors.email} ref={register({required: '* required'})} name='email'
                                      placeholder="Enter email"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control ref={register} name="locaiton" type="text"
                                          placeholder="Location" className="second-step-input"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhonenumber">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control ref={register} name="phone" type="text"
                                          placeholder="Phone number" className="second-step-input"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" isInvalid={errors.password} ref={register({required: '* required'})} name='password'
                                      placeholder="Password"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.password && errors.password.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordConfirm">
                        <Form.Control type="password" isInvalid={errors.passwordConfirm} ref={register({required: '* required'})} name='passwordConfirm'
                                      placeholder="Password Confirm"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.passwordConfirm && errors.passwordConfirm.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                        <Button variant="primary btn-lg" type="submit" className="login d-flex justify-content-end">
                            Next →
                        </Button>
                    </Form>
                </Col>
            </div>
                </Col>
            </Row>
        </Container>
    </WithMainNavBarAndFooter>;

    return <>
        {!calledApi && registerForm}
        {calledApi && !inProgress ? (successful ? "Please verify using the link provided in your email" : "Something went wrong") : <></>}
        {calledApi && <Spinner animation="grow" role="status" variant="success">
            <span className="sr-only">Loading...</span>
        </Spinner>}
    </>;
}

export default Page;