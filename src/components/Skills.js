import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { images } from '../assets/img';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error dignissimos
                                cupiditate? Doloribus ipsam laborum eaque minima quod, ducimus a.
                            </p>
                            <Carousel className='skill-slider' responsive={responsive} infinite={true}>
                                <div className='item'>
                                    <img src={images.meter1} alt='images' />
                                    <h5>Web Development</h5>
                                </div>

                                <div className='item'>
                                    <img src={images.meter2} alt='images' />
                                    <h5>Logo Design</h5>
                                </div>

                                <div className='item'>
                                    <img src={images.meter3} alt='images' />
                                    <h5>Brand Identity</h5>
                                </div>

                                <div className='item'>
                                    <img src={images.meter1} alt='images' />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={images.colorSharp} alt='images-colorSharp' />
        </section>
    );
};

export default Skills;
