import React from 'react';

import { images } from '../assets/img';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import ProjectCard from './ProjectCard';

import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Projects = () => {
    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: images.projImg1,
        },
        {
            title: 'Hotel App',
            description: 'Development',
            imgUrl: images.projImg2,
        },
        {
            title: 'Sell House App',
            description: 'Design & Development',
            imgUrl: images.projImg3,
        },
        {
            title: 'Admin Dashboard',
            description: 'Development',
            imgUrl: images.projImg1,
        },
        {
            title: 'Movie Website',
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
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>Projects</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem suscipit
                                        tempora ipsam facere deserunt eius, vel harum est consequatur dolores, voluptatibus
                                        dicta, distinctio ducimus blanditiis culpa libero aliquam nemo?
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav
                                variant='pills'
                                className='nav-pills mb-5 justify-content-center align-items-center'
                                id='pills-tab'>
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
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={images.colorSharp2} alt='' className='background-image-right' />
        </section>
    );
};

export default Projects;
