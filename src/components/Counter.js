import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import {increment, decrement} from '../actions';
import { mapStateOnServer } from 'react-helmet/lib/HelmetUtils';

class Counter extends Component {
    
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={() => this.props.myMetch()}>increm</button>
        <button onClick={this.decFunc}>decrem</button>
      </div>
    )
  }
  decFunc = () => {
    this.props.myDecr()
  }
}


Counter.propTypes = {
    counter: PropTypes.number
}

const mapStateToProps = (state) => {
  return {count: state.count}
};

const mapDispatchToProps = {
  myMetch: increment,
  myDecr: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default connect(
//     state => ({
//         count: state.count
//     }),
//     dispatch => ({
//       myMetch: () => {
//         dispatch(increment())
//       }
//     })
// )(Counter);