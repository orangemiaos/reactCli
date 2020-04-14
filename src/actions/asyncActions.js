import {get} from 'axios';

const asyncActions = (dispatch) => async (dispatch) => {
    const result = await get('http://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: 'GRT_LIST',
        dataList: result.data
    });
};


export default asyncActions;
