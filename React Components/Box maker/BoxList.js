import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [{
                width: 100,
                height: 100,
                color: 'blue'
            },
            {
                width: 400,
                height: 500,
                color: 'red'
            }
            ]
        }
    }

    addBox = (box) => {
        this.setState({ boxes: [...this.state.boxes, box] })
    }
    render() {
        let boxes = this.state.boxes.map(box => <Box width={box.width} height={box.height} color={box.color} />);
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                <div className='box-container'>
                    {boxes}
                </div>
            </div>
        );
    }
}