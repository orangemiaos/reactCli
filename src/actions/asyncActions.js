import {get} from 'axios';
export const asyncActions = async (dispatch)=>{
    const result =await get('http://jsonplaceholder.typicode.com/posts');
    console.log(dispatch,'res');
    dispatch({
        type:'YES',
        dataList:result.data
    })
};
