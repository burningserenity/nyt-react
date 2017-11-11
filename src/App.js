import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { SimpleCard, ResultsCard } from './components/Cards';
import { Header } from './components/Header/Header';
import { Row, Col, Container, ReadOnly } from './components/Cirrus';

import axios from 'axios';
window.axios = axios;

class App extends Component {

    state = {
        q: "stuff",
        begin_date: "1985",
        end_date: "2001",
        results: null
    }

    onTopicChange = (event) => {
        console.log(event.target.value);
        this.setState({
            q: event.target.value
        })
    }

    onStartChange = (event) => {
        console.log(event.target.value);
        this.setState({
            begin_date: event.target.value
        })
    }

    onEndChange = (event) => {
        console.log(event.target.value);
        this.setState({
            end_date: event.target.value
        })
    }

    onResultsHandler = (res) => {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=eafa397532be49299f095815f8165bde&q=${this.state.q}&begin_date=${this.state.begin_date}0101&end_date=${this.state.end_date}1231`;
        axios.get(url).then(res => {
            this.setState({
                results: res.data.response.docs.map(doc => doc.headline.main )
            });    
        });
    }

    render() {
        console.log(this.state.results);
        return(
            <div className="container">
                <Header />
                <Row>
                    <Col size="12">
                        <SimpleCard 
            q = {this.state.q} changedHandler = {this.onTopicChange} 
            begin_date = {this.state.begin_date} changedSHandler = {this.onStartChange}
            end_date = {this.state.end_date} changedEHandler = {this.onEndChange}
            clicked={this.onResultsHandler}/>
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
