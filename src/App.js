import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { SimpleCard, ResultsCard } from './components/Cards';
import { Header } from './components/Header/Header';
import { Row, Col, Container, ReadOnly } from './components/Cirrus';

import axios from 'axios';
window.axios = axios;

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="container">
                <Header />
                <Row>
                    <Col size="12">
                        <SimpleCard />
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <ResultsCard heading="Results">
                        </ResultsCard>
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <ResultsCard heading="Saved">
                        </ResultsCard>
                    </Col>
                </Row>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
