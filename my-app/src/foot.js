import * as React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-5"   >
                <Container className="text-left">
                    <Row>
                        <Col md="8">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Social Media  </h5>

                        </Col>
            
                        <Col md="8">
                            <h3 className="text-uppercase mb-4 mt-1 font-weight-bold">Links</h3>
                            <ul className="list-unstyled">
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">Page</a></li>
                                <li><a href="#!">Login</a></li>
                                <li><a href="#!">Register</a></li>
                            </ul>
                        </Col>
                        
                    </Row>
                </Container>
               
              
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
               
            </Footer>
        );
    }
}

export default FooterPage;