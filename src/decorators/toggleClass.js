import React, { Component } from 'react';


export default (Wr) => class WrapperComponent extends Component {

    state = {
        sw: false
    }

    render() {
        return <Wr {...this.props} {...this.state} switchHandler={this.switchHandler}  />
    }

    switchHandler = (e) =>{
        e.preventDefault();
        this.setState({
              sw:!this.state.sw
        })
    }
}