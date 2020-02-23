import React, { Component } from 'react';
import './NewBoxForm.css';

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            width: '',
            height: '',
            color: ''
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <label htmlFor='width'>Width</label>
                <input type='number' id='width' name='width' value={this.state.width} onChange={this.handleChange} />
                <label htmlFor='width'>Height</label>
                <input type='number' id='height' name='height' value={this.state.height} onChange={this.handleChange} />
                <label htmlFor='width'>Color</label>
                <input type='text' id='color' name='color' value={this.state.color} onChange={this.handleChange} />
                <input type='submit' value='Create Box' />
            </form>
        );
    }
}