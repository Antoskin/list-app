import React, { Component } from 'react'
import {Button} from 'react-materialize';
import Hemlet from 'react-helmet';

export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ``,
            comment: ``
        }
    }
    render() {
        const {user, comment} = this.state;
        return <form onSubmit={this.handlerSub}>
                        user: <input
                                    className={this.getClass('user')}
                                    value={user}
                                    onChange={this.changeHandler('user')}
                        />
                        comment: <input
                                    className={this.getClass('comment')}
                                    value={comment}
                                    onChange={this.changeHandler('comment')}
                        />
                        <input type="submit" value='leave'/>
                        <Hemlet>
                            <style>
                                {
                                    `.lessCl {border-bottom:2px solid red !important;}`
                                }
                            </style>
                        </Hemlet>
                </form>
    }
    handlerSub = e => {
        e.preventDefault();
        this.setState({
            user:``,comment:``
        })
    };
    getClass = type => {
        if(this.state[type].length < rulles[type].min)
            return `lessCl`;
    };
    changeHandler = type => ev => {
        if(ev.target.value.length > rulles[type].max) return;
        this.setState({
            [type]: ev.target.value
        })
    };
}
const rulles = {
    user: {
        min: 3,
        max: 6
    },
    comment: {
        min: 10,
        max: 20
    }
};
// export default class AddComment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user:``,
//             comment:``
//         }
//     }
//     render() {
//         return (
//             <section className="addCommentArea">
//                 <form onSubmit={this.handleSubmit}>
//                     Ваше имя: <input
//                         className={ this.state.user.length < 3 &&
//                                     this.state.user.length != 0 ||
//                                     this.state.user.length > 10 ? `lessCl` :  ``  }
//                         value={this.state.user}
//                         onChange={(e)=>this.setState({user:e.target.value})}
//                     />
//                     Ваш комментарий: <input
//                         type="text"
//                         value={this.state.comment}
//                         onChange={(e)=>this.setState({comment:e.target.value})}
//                     />
//                     <input type="submit" value="отправить"/>
//                 </form>
//                 <Hemlet>
//                     <style>
//                         {
//                             `
//                             .lessCl {border-bottom:2px solid red !important;}
//                             `
//                         }
//                     </style>
//                 </Hemlet>
//             </section>
//         )
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.setState({
//             user:``,
//             comment:``
//         })
//     }
// }
