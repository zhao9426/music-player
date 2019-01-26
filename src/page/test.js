import React, { Component } from "react";
// import PropTypes from "prop-types";
import {observer, PropTypes  } from "mobx-react";

@observer
class Bar extends Component {
    static propTypes = {
        queue:  PropTypes.observableArray//PropTypes.array
    };

    render(){
        const { queue } = this.props;
        return (
            <span>{queue.length}</span>
        )
    }
}


class Foo extends Component {
    static propTypes = {
        cache: PropTypes.observableObject //PropTypes.object
    }

    render() {
        const { cache, refresh }= this.props;
        return (
            <div>
                <Bar queue={cache.queue}></Bar>
                <button onClick={refresh}>Refresh</button>
            </div>
        )
    }
}

export default Foo;