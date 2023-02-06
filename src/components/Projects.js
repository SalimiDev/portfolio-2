import React from 'react';

import { images } from '../assets/img';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Tab } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg3,
        },
    ];
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                    </Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sequi ratione illo.</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                        <Nav variant='pills' defaultActiveKey='/home'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Tab three</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {projects.map((project, index) => (
                                        <p>{project.title}</p>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
