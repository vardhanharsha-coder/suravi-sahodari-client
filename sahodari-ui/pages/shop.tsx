import WithMainNavBarAndSideBar from "../layout/withmainnavbarandsidebar";
import {Breadcrumb, Button, Card, Col, Container, Nav, Row, Table} from "react-bootstrap";
import Product from "../components/product";

import { splitEvery } from "rambdax";
import {useEffect} from "react";
import {useRouter} from "next/router";

let products = [
    {
        img: "/images/productimg.png",
        name: "PPE",
        description: "Short Description of contents. ",
        quantity: 1,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Face Mask",
        description: "Short Description of contents. ",
        quantity: 20,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Item 4",
        description: "Short Description of contents. ",
        quantity: 10,
        availability: false
    },
    {
        img: "/images/productimg.png",
        name: "Item 5",
        description: "Short Description of contents. ",
        quantity: 1,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Item 6",
        description: "Short Description of contents. ",
        quantity: 20,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Item 7",
        description: "Short Description of contents. ",
        quantity: 10,
        availability: false
    },
    {
        img: "/images/productimg.png",
        name: "Item 8",
        description: "Short Description of contents. ",
        quantity: 1,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Item 9",
        description: "Short Description of contents. ",
        quantity: 20,
        availability: true
    },
    {
        img: "/images/productimg.png",
        name: "Item 10",
        description: "Short Description of contents. ",
        quantity: 10,
        availability: false
    }

    
]

// products = products.concat(products);

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token == null) router.replace("/login");
    }, []);
    return <WithMainNavBarAndSideBar>
        <Container fluid>
            <Row>
                <Col xl={12}>
                <h5>Resources Available</h5>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Container className="mt-4">
                        {
                            <Row>
                                {
                                    products.map(p => {
                                        return <Col xl={4} lg={4} md={5} sm={6} xs={12}>
                                            <Product product={p} />
                                        </Col>
                                    })
                                }
                            </Row>
                        }
                    </Container>
                </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-end">
                <Col xl="6">
                    <Row>
                        <Col xl={6}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="p-1 border-0">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                  <td className="p-1 border-0 text-secondary">Description</td>
                                  <td className="p-1 border-0 text-secondary">Total</td>
                                 </tr>
                                 <tr>
                                  <td className="p-1 border-0 font-13">PPE Kit x 95 Units</td>
                                  <td className="p-1 border-0 font-13">INR 34,000</td>
                                 </tr>
                                 <tr>
                                  <td className="p-1 border-0 font-13">Item 2 x 30 Units</td>
                                  <td className="p-1 border-0 font-13">INR 20,000</td>
                                 </tr>
                                 <tr>
                                  <td className="p-1 border-0 font-13">Item 6 x 999 Units</td>
                                  <td className="p-1 border-0 font-13">INR 4,000</td>
                                 </tr>
                                 </tbody>
                            </Table>
                        </Col>
                        <Col xl={6}>
                          <div className="d-flex align-items-center">
                            <Button variant="warning" className="request-button font-weight-bold">Request →</Button>
                          </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    </WithMainNavBarAndSideBar>;
}

export default Page;