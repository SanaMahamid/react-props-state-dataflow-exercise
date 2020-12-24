import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.data.map((item, index) => <Item key={index} item={item} 
        shouldDiscount={this.props.shouldDiscount}/>)
    }
}

export default Home