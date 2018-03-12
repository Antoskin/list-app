import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import Helmet from 'react-helmet';
import ArticleList from './ArticleList';
import Counter from './Counter';
import Selector from './Select';
// import { articles } from './statji';

// import Select  from 'react-select';
import 'react-select/dist/react-select.css';
import DayPicker from './Daypikker';
import Inputer from './InputArea';

class App extends Component {
    render() {
    return  <Row className="center">
              <Col className="cent" l={3} m={4} s={12}>
                  <Counter  />
                  <Inputer />
                  <DayPicker/>
                  <Selector />
                  <ArticleList />
              </Col>
              <Helmet>
                <style>
                  {
                    `.cent{margin:0 auto;float: inherit !important}`
                  }
                </style>
              </Helmet>
            </Row>
  }
}

export default App;
// export default connect(
//   state => ({count:state.count}),
//   dispatch => ({
//     myMeth: () => {
//       dispatch(increment())
//     }
//   })
// )(App);