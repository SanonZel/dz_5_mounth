import React, {Component} from 'react';
import './app.css';

class SwapComp extends Component {

    render() {
        console.log(this.props.changeColor);
        console.log(this.props.handleBackColor);
        console.log(this.props.color);
        return (
            <div className={`item ${this.props.color.color}`}>
                <button onClick={(e) => this.props.changeColor()}>смена темы</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, mollitia.</p>
            </div>
        );
    }
}

export default SwapComp;
