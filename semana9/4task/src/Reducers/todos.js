const initialState = {
    tasksList: []
};

const todos = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            const newTaskList = [...state, taskList, action,
            payload]
            return {...state, taskList: newTaskList}
        case "CLASSIFY_TASK":
            const newTaskList = [...state, taskList, action,
                payload]
                return {...state, taskList: newTaskList}
        case "REMOVE_TASK":
            const newTaskList = [...state, taskList, action,
                payload]
                return {...state, taskList: newTaskList}
            default:
                return state;

    }
}

export default todos;