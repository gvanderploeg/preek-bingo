import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Woord from "./Woord.js"

class Bord extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            score: 0
        };

        this.increaseScore = this.increaseScore.bind(this);
        this.decreaseScore = this.decreaseScore.bind(this);
    
    }
    increaseScore() {
        this.setState(prevState  => ({ score: prevState.score + 1 }));
        console.log("increaseScore!: " + this.state.score);

    }

    decreaseScore() {
        this.setState(prevState  => ({ score: prevState.score - 1 }));
        console.log("decreaseScore!: " + this.state.score);

    }
   
    render() {
        var rows = [];
        for (var i=0; i< this.props.rows; i++) {
            var cols = [];
            for (var j=0; j<this.props.cols; j++) {
                cols.push (
                <Col key={j}>
                    <Woord onIncreaseScore={this.increaseScore} onDecreaseScore={this.decreaseScore} word={this.props.woorden.pop()} />
                </Col>);
            }
            rows.push(<Row key={i}>{cols}</Row>);
        }
        return (
        <Container className="p-3">
            <Row><Col key="0">Score: {this.state.score}</Col></Row>
            {rows}
        </Container>);
    }
}

export default Bord;