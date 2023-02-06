import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { images } from '../assets/img';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, event) => {
        setFormDetails({
            ...formDetails,
            [category]: event.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Appllication/json;charset=utf=8',
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);

        if (result.code) {
            setStatus({ success: true, message: 'Message sent seuccessfully' });
        } else {
            setStatus({ success: false, message: 'Somthing went wrong , please try again later' });
        }
    };
    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={images.contactImg} alt='contact us' />
                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className='px-1'>
                                    <input
                                        type='text'
                                        value={formDetails.firstName}
                                        placeholder='First Name'
                                        onChange={e => onFormUpdate('firstName', e)}
                                    />
                                </Col>

                                <Col size={12} sm={6} className='px-1'>
                                    <input
                                        type='text'
                                        value={formDetails.lasttName}
                                        placeholder='Last Name'
                                        onChange={e => onFormUpdate('lastName', e)}
                                    />
                                </Col>

                                <Col size={12} sm={6} className='px-1'>
                                    <input
                                        type='email'
                                        value={formDetails.email}
                                        placeholder='Email Address'
                                        onChange={e => onFormUpdate('email', e)}
                                    />
                                </Col>

                                <Col size={12} sm={6} className='px-1'>
                                    <input
                                        type='tel'
                                        value={formDetails.phone}
                                        placeholder='Phone No.'
                                        onChange={e => onFormUpdate('phone', e)}
                                    />
                                </Col>

                                <Col size={12} className='px-1'>
                                    <textarea
                                        rows='6'
                                        value={formDetails.message}
                                        placeholder='Message'
                                        onChange={e => onFormUpdate('message', e)}></textarea>
                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>

                                {status.message && (
                                    <Col>
                                        <p className={status.success ? 'success' : 'danger'}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
