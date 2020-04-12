import {createContext} from 'react';

const globalData = {
    value:'我是globalData'
};
const globalContext = createContext(globalData);

export {
    globalContext,
    globalData
}
