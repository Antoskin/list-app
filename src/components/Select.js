
import React, { Component } from 'react'
import Select  from 'react-select';
import {connect} from 'react-redux';


class Selector extends Component {
    state = { selection: null }
    render() {
        const options = this.props.articles.map( (i, id) => ({
            label: i.name,
            value: i.id
        }));
        console.log(options)
        
    return <Select  options={options}
                    multi={true}
                    value={this.state.selection}
                    onChange={this.changeSelection} />
  }
  changeSelection = selection => this.setState({selection})
}

// mapStateToProps = ({articles}) => {articles}
function mapStateToProps(state) {
    return { articles: state.articles }
}

export default connect(mapStateToProps)(Selector);

