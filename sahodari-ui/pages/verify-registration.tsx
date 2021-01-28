import { useRouter} from "next/router";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";

const Page = () => {
    const router = useRouter();
    if ("user_id" in router.query) {
        axios.post('http://dev-api.sahodari.life/api/v1/accounts/verify-registration/', {
            ...router.query
        }).then(console.log).then(() => {
            setTimeout(() => router.replace("/login"), 2000);
        });
    }
    return <Container>
        <Row><Col className="m-auto text-center"><h1>Verified Successfully</h1></Col></Row>
    </Container>;
}

export default Page;