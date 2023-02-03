import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';

import { images } from '../assets/img';

const Bannner = () => {

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>
                            {`Hi I'm Mehdi `}
                            <span className='wrap'>{'text'}</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, magnam corrupti aperiam provident
                            amet quos consequuntur totam quasi? Dolorum pariatur ab, laudantium aliquid asperiores excepturi
                            ea quos ullam eius a dolore hic delectus quaerat molestias, iste officiis nemo deserunt id,
                            eligendi quae quibusdam? Earum, officiis eos quos obcaecati labore voluptatum.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            Let's connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={images.headerImg} alt='Header img' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Bannner;
