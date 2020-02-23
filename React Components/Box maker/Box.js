import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: this.props.color,
                width: `${this.props.width}px`,
                height: `${this.props.height}px`,
                margin: `${20}px`
            }}>

            </div>
        );
    }
}
