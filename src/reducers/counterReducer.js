const initData = {count: 1};
const counterReducer = (state = initData, action) => {
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