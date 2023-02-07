import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import { ArrowRightCircle } from 'react-bootstrap-icons';

import { images } from '../assets/img';

const Bannner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <span className='tagline'>Welcome to my portfolio</span>
                                    <h1>
                                        {`Hi I'm Mehdi `}
                                        <span className='wrap'>{text}</span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, magnam corrupti
                                        aperiam provident amet quos consequuntur totam quasi? Dolorum pariatur ab, laudantium
                                        aliquid asperiores excepturi.
                                    </p>
                                    <button onClick={() => console.log('connect')}>
                                        Let's connect <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
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
