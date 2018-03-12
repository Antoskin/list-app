import React, {Component} from 'react';

export default Wrapperer => class Toggle extends Component {
    state = {
        openArticeId: null
    }
    render() {
        return <Wrapperer 
                    {...this.props}
                    openArticeId={this.state.openArticeId} 
                    toggleOpenArt={this.toggleOpenArt}  />
    }
    toggleOpenArt = (openArticeId) => {
        this.setState({openArticeId});
        if(this.state.openArticeId === openArticeId) {
            this.setState({openArticeId:null});
        }
    }
}