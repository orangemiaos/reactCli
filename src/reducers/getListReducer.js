const getListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GRT_LIST":
            return state;
        default:
            return state;
    }
};
export default getListReducer;
