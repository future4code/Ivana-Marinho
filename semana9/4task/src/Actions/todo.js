export const addTask = inputValue =>{
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime(),
            inputValue: inputValue,
            completa: false
        }
    }
}

export const classifyTask = () =>{
    return{
        type: "CLASSIFY_TASK",
        payload: {
            id: id
        }
    }
}

export const removeTask = ()=>{
    return{
        type: "REMOVE_TASK",
        payload: {
            id: id,
            completa: true
        }
    }
}