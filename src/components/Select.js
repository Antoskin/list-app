
import React, { Component } from 'react'
import Select  from 'react-select';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectFilter} from '../actions/index';


class Selector extends Component {
    state = { selection: null }
    render() {
        const options = this.props.articles.map( (i, id) => ({
            label: i.name,
            value: i.id
        }));
        
    return <Select  options={options}
                    multi={true}
                    value={this.state.selection}
                    onChange={this.changeSelection}
                     />

    
  }
    changeSelection = selection => {
       
        this.setState({selection}) //must be first

        var idetiti = null;
        if(this.state.selection) {
            idetiti = this.state.selection.map( (i, id) => {
                return i.value;
            } )
        }
        this.props.filtering(idetiti);
        
        console.log(idetiti);
      
    }


   



}

// function mapStateToProps(state) {
//     return { articles: state.articles }
// }
// function mapDispatchToprops(dispatch) {
//     return bindActionCreators({selectFilter}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToprops)(Selector);

export default connect(
    state => ({ articles: state.articles }),
    dispatch => ({
        filtering: ( selected ) => (
            dispatch(selectFilter(selected))
        )
    })
)(Selector);