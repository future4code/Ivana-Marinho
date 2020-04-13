export const adicionartarefa = () =>{
    return{
        type: "ADICIONAR_TAREFA",
        payload: {
            taskId: taskId
        }
    }
}

export const classificarTarefa = () =>{
    return{
        type: "CLASSIFICAR_TAREFA",
        payload: {
            taskId: taskId
        }
    }
}

export const excluirTarefa = ()=>{
    return{
        type: "EXCLUIR_TAREFA",
        payload: {
            taskId: taskId
        }
    }
}