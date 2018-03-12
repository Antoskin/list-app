import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Article from './Article';
import {connect} from 'react-redux';

import Wrapperer from '../decorators/artToggleClass';


class ArticleList extends Component {
    render() {
        // console.log(this.props.articles, `shit, it works`);
        const { articles, openArticeId, toggleOpenArt } =  this.props;
        return articles.map( i => (
                            <Article 
                                key={i.id} 
                                articl={i} 
                                index={i.id}
                                sw = {i.id === openArticeId}
                                switchHandler = { () => toggleOpenArt(i.id) }
                                openArticeId={openArticeId}
                            />
                        
        ));
    }
}
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenArt: PropTypes.func.isRequired
}
export default connect(
    state => ({
        articles: state.articles
    })
)(Wrapperer(ArticleList));