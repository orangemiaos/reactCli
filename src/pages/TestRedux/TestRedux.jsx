import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Action} from '../../actions';
import {asyncActions} from '../../actions/asyncActions';

class TestRedux extends Component {
    render() {
        const {counter, getList,add, reduce} = this.props;
        console.log(this.props,'props');
        return (
            <div>
                <div>
                    <p>我的数字是：{counter.count}</p>
                    <input type="button" value='点我+1' onClick={add}/>
                    <input type="button" value='点我-1' onClick={reduce}/>
                </div>
                <div>
                    {/*<div><input type="button" value='请求异步数据' onClick={dispatch(asyncActions())}/></div>*/}
                    <ul>
                        {getList.map(item => <li key={item.id}>{item.title}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state};
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(Action.add),
        reduce: () => dispatch(Action.reduce),
    }
    // return bindActionCreators({
    //     getList: Action.getList,
    //     add: Action.add
    // }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(TestRedux);
