import {Button, Col, Container, Form, FormControl, InputGroup, Image, Row} from "react-bootstrap";

const Product = ({product}) => <Container className="p-3 mb-4" style={{minHeight:10}}>

    <Row className="pt-1">
        <Col lg={4}>
            <div className="productDiv">
            <Image style={{marginLeft: -15, height:'auto'}} src={product.img} />
            </div>
        </Col>
        <Col lg={8}>
        <div className="font-weight-bold">{ product.name }</div>
        <div className="text-secondary">{ product.description }</div>
        <div>
        <Form>
                <Form.Group>
                        <InputGroup size="sm">
                        <Form.Label column sm="4" className="pl-0 text-secondary">
                           Quantity: 
                        </Form.Label>
                        <Col sm="8">
                         <Form.Control type="text" placeholder="Ex: 50" />
                        </Col>
                        </InputGroup>
                </Form.Group>
            </Form>
        </div>
        </Col>     
    </Row>
</Container>

export default Product;