import React from 'react';
import Repos from '../../repos.json';
import RepoCard from '../RepoCard';
import Row from "../Row";
import Col from "../Col";

function Project() {
    return (
        <section>
            <Row className="row">
                <Col size="md-6">
                    <RepoCard content={Repos[0]}/>
                </Col>
                <Col size="md-6">
                    <RepoCard content={Repos[1]}/>
                </Col>
                
            </Row>
            <Row className="row">
                <Col size="md-6">
                    <RepoCard content={Repos[2]}/>
                </Col>
                <Col size="md-6">
                    <RepoCard content={Repos[3]}/>
                </Col>
            </Row>
            <Row className="row">
                <Col size="md-6">
                    <RepoCard content={Repos[4]}/>
                </Col>
                <Col size="md-6">
                    <RepoCard content={Repos[5]}/>
                </Col>
            </Row>
        </section>
    )
}

export default Project