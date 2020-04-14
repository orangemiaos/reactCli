const getListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GRT_LIST":
            return state.getList = action.dataList;
        default:
            return state;
    }
};
export default getListReducer;
