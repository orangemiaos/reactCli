// 虽然定义了初始数据，但这里仍要为初始数据赋值
const getListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GRT_LIST":
            return state.getList = action.dataList;
        default:
            return state;
    }
};
export default getListReducer;
