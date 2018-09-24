import React,{Component} from 'react'
import './hello.less'
class Hello extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="hello-component">
                Hello World, React and webpack
            </div>
        );
    }
}

export default Hello