import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';

import { images } from '../assets/img';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={images.logo} alt='Logo' />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='/#'>
                                <img src={images.navIcon1} alt='Icon' />
                            </a>
                            <a href='/#'>
                                <img src={images.navIcon2} alt='Icon' />
                            </a>
                            <a href='/#'>
                                <img src={images.navIcon3} alt='Icon' />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
