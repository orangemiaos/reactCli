import React from 'react';
import {connect} from '../../utils/decorator';

@connect
class Test extends React.Component{
    componentDidMount() {
        this.getDecorator();
    }
    render() {
        return (
            <div>Test</div>
        )
    }
}

export default Test;
