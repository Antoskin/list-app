import React, { Component } from 'react'


export default class Inputer extends Component {
    constructor(props) {
        super(props);
        this.state = {val:''}
    }
  render() {
    return <section>
                Name: <input type="text" 
                        value={this.state.val } 
                        onChange={this.inputWatcher}/>
    </section>
  }

  inputWatcher = (e) => {
    this.setState({val:e.target.val});
  }
}
