import WithMainNavBarAndSideBar from "../layout/withmainnavbarandsidebar";
import useSWR from "swr";
import apiclient from "../utils/apiclient";
import {useRouter} from "next/router";
import { Col, Container, Row, Table } from "react-bootstrap";

const Page = () => {

    const { data, error } = useSWR(['http://dev-api.sahodari.life/api/v1/accounts/profile/', useRouter()], apiclient);
    //  let info = [data && Object.keys(data.data).map(k => <li>{data.data[k]}</li>)];
     console.log(data);
    return <WithMainNavBarAndSideBar>
        {/* <ul>
            { data && Object.keys(data.data).map(k => <li>{data.data[k]}</li>) }
        </ul> */}
        
        
        { data && <div>
            <Container>
                <Row>
                    <Col lg={11} style={{"backgroundColor":"#FFEFDF"}} className="rounded mb-5">
                      <div className="py-4">
                          <Row>
                              <Col lg={3}>
                              <div className="h5 px-5">Personal Info</div>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={3} className="text-center">
                              <img src="/images/profile.png" className="rounded-circle" alt="Cinque Terre"/>
                              </Col>
                              <Col lg={5}>
                                  <Table className="p-0 border-0">
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Name</td>
                                          <td className="p-0 border-0">{data.data.first_name}</td>
                                      </tr>
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Gender</td>
                                          <td className="p-0 border-0">Male</td>
                                      </tr>
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Age</td>
                                          <td className="p-0 border-0">27</td>
                                      </tr>
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Phone Number</td>
                                          <td className="p-0 border-0">{data.data.mobile_number}</td>
                                      </tr>
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Email</td>
                                          <td className="p-0 border-0">{data.data.email}</td>
                                      </tr>
                                      <tr className="p-0 border-0">
                                          <td className="p-0 border-0 text-secondary">Location</td>
                                          <td className="p-0 border-0">{data.data.address_line1}</td>
                                      </tr>
                                  </Table>
                              </Col>
                          </Row>
                          <Row className="justify-content-md-center pt-5">
                              <Col lg={4}>
                                  <div>
                                      <h4>Employment History</h4>
                                  </div>
                                  <div>
                                      <div> 
                                          <span className="text-secondary">Experience |</span> 
                                          <span>3 Years, 8 Months</span>
                                      </div>
                                      <div>
                                          <span className="text-secondary">Hospital |</span> 
                                          <span>Manipal Hospitals, Old Airport Road</span>
                                      </div>
                                  </div>
                              </Col>
                              <Col lg={4}>
                                  <div>
                                      <h4>Residence Information</h4>
                                  </div>
                                  <div>
                                      <div> 
                                          <span className="text-secondary">City of Residence |</span> 
                                          <span>{data.data.city}</span>
                                      </div>
                                      <div>
                                          <span className="text-secondary">State of Residence |</span> 
                                          <span>{data.data.state}</span>
                                      </div>
                                      <div>
                                          <span className="text-secondary">Address |</span> 
                                          <span>{data.data.address_line1}</span>
                                      </div>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                    </Col>
                </Row>
            </Container>

        </div> }
    </WithMainNavBarAndSideBar>
}



export default Page;