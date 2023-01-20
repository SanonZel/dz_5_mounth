import React, {Component} from 'react';
import './App.css';

const ColorStrix = (WrappedComponent) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "dark"
            }
        }
        handleChangeColor = () => {
            this.setState({color: "light"})
        }
        render() {
            return (
                <WrappedComponent {...this.props} color={this.state} changeColor={() => this.handleChangeColor()}/>
            );
        }
    }
};

export default ColorStrix;