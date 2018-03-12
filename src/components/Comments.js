import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'react-materialize';
import AddComment from './AddComment';

import toggleClass from '../decorators/toggleClass';

import Helmet from 'react-helmet';
import {CSSTransitionGroup} from 'react-transition-group';


const Comments = ({comment, sw, switchHandler}) => {
    // if(!comment) return <p>...</p>;
    const comList = comment.map( (i, index) => {
                    return <li key={index}>{i.Ant}</li> })
    return <ul>
                <Button onClick={switchHandler}>
                    {!sw?`show comments`:`hide comments`}
                </Button>
                <CSSTransitionGroup
                    transitionName="miner"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {sw?comList :null}
                        {sw?<AddComment/> :null}
                </CSSTransitionGroup>
                <Helmet>
                    <style>
                        {
                            `
                            .miner-enter {
                                opacity: 0;  
                              }
                              
                              .miner-enter.miner-enter-active {
                                opacity: 1;
                                transition: opacity 500ms ease-in;
                              }
                              
                              .miner-leave {
                                opacity: 1;
                              }
                              
                              .miner-leave.miner-leave-active {
                                opacity: 0;
                                transition: opacity 300ms ease-in;
                              }
                            `
                        }
                    </style>
                </Helmet>
                
    </ul>
}
Comments.defaultProps = { //if comment doesnt have val, return just arr
    comment: []
}


export default toggleClass(Comments);