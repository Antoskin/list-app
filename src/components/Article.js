import React, { Component } from 'react'
import Comments from './Comments';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';
import {Button, CardPanel, Col, Row } from 'react-materialize';
import './article.css';


import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import toggleClass from '../decorators/toggleClass';


class Article extends Component {
  render() {
    const { articl, sw, switchHandler } = this.props;
    // console.log(sw);
   return <section className='grid-example'>
                    <h4>{articl.id} </h4>
                    <Button onClick={switchHandler}>
                        {sw?`hide`:`show`}
                    </Button>
                    <Button onClick={this.delItem}>kill</Button>
                    <CSSTransitionGroup
                      transitionName="mine"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={300}>
                        {this.bodyText()}
                    </CSSTransitionGroup>
              </section>
  }

  delItem = () => {
    console.log(`!shit`);
    const {deleteArticle, index} = this.props;
    deleteArticle(index);
    console.log(index);
  }

  bodyText = () => {
    const { articl, sw } = this.props;
    if(!sw) return false;
    return ( 
    <section>
        <CardPanel className="teal lighten-5"> {articl.text} </CardPanel>
        <Comments comment={articl.comments}/>
    </section>
    );
  }
}

Article.propTypes = {
  articl: PropTypes.object.isRequired,
 
}


export default connect(null, { deleteArticle })(Article)