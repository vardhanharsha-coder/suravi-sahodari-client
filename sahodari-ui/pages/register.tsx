import WithMainNavBar from "../layout/withmainnavbar";
import {Container, Button, Form, Col, Spinner} from "react-bootstrap";
import {useState} from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";

const Page = () => {
    const {register, handleSubmit, errors} = useForm();

    const [calledApi, setCalledApi] = useState(false);
    const [inProgress, setInprogress] = useState(false);
    const [successful, setSuccessful] = useState(false);

    let registerAction = async ({email, username, password, passwordConfirm}) => {
        setCalledApi(true);
        setInprogress(true);
        const response = await axios.post('http://dev-api.sahodari.life/api/v1/accounts/register/', {
            email,
            username,
            password,
            password_confirm: passwordConfirm,
            user_type: 'nurse'
        });
        setInprogress(false);
        setSuccessful(response.status == 201);
    }

    let registerForm = <Container>
        <div className="d-flex flex-row justify-content-center">
            <Col className="mt-5" xs={10} sm={8} md={7} lg={5}>
                <Form onSubmit={handleSubmit(registerAction)}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" isInvalid={errors.username} ref={register({required: '* required'})} name='username'
                                      placeholder="Username"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.username && errors.username.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" isInvalid={errors.email} ref={register({required: '* required'})} name='email'
                                      placeholder="Enter email"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" isInvalid={errors.password} ref={register({required: '* required'})} name='password'
                                      placeholder="Password"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.password && errors.password.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordConfirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type="password" isInvalid={errors.passwordConfirm} ref={register({required: '* required'})} name='passwordConfirm'
                                      placeholder="Password Confirm"/>
                        <Form.Control.Feedback type="invalid">
                            {errors.passwordConfirm && errors.passwordConfirm.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Col>
        </div>
    </Container>;

    return <WithMainNavBar>
        {!calledApi && registerForm}
        {calledApi && !inProgress ? (successful ? "Please verify using the link provided in your email" : "Something went wrong") : <></>}
        {calledApi && <Spinner animation="grow" role="status" variant="success">
            <span className="sr-only">Loading...</span>
        </Spinner>}
    </WithMainNavBar>
}

export default Page;