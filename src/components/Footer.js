import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return(
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                    <a className= "btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ruth-a-clark">
                        <i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                    <a className= "btn btn-social-icon btn-github" href="https://github.com/ruthyclark"> 
                        <i className="fa fa-2x fa-github-square"></i></a>
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                    Don't be Ruth-less
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;