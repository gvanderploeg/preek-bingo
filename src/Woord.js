
import React from 'react';



class Woord extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            ticked: false,
            word: props.word
        };
    
    }

    tickx = (elem) => {
    }

    tick = (elem) => {
        console.log("click: !" + elem);

        if (this.state.ticked) {
            this.setState({ticked: false})
            this.props.onDecreaseScore();

        } else {
            this.setState({ticked: true})
            this.props.onIncreaseScore();
        }
        
      };

    render() {
        
        return (
            <div onClick={this.tick} className={`woord ${this.state.ticked ? "ticked" : ""}`}>{this.state.word}</div>
        );
    }
}

export default Woord;