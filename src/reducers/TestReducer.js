const INITIAL_STATE = {name: "Mathew Wong", age: "34", sex: "Yes Please"};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'test_fetch':
            return {...state, name: "Clemmy Wong"};
        default:
            return state;
    }
}