// 虽然定义了初始数据，但这里仍要为初始数据赋值
const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, count: state.count + action.value
            };
        case "REDUCE":
            return {
                ...state, count: state.count - action.value
            };
        default:
            return state;
    }
};
export default counterReducer;
