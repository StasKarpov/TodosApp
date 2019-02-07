
export default function tasks(state=[],action){
  switch (action.type){
    case "SUCCESS_LOGIN"://login as admin with dummy credentials
      return Object.assign({},state,{
        isAuthentificated:true
      })
    case "FAILED_LOGIN"://login as admin with dummy credentials
      return Object.assign({},state,{
        loginFailed:true
      })

    case "REQUEST_TASKS":
      return Object.assign({},state,{
        isFetching:true,
        items:[],
        totalTasksCount:0
      })
    case "RECEIVE_TASKS":
      return Object.assign({},state,{
        isFetching:false,
        totalTasksCount: action.json.message.total_task_count,
        items: action.json.message.tasks,
        page:action.page,
        sortBy: action.sortBy,
        order: action.order,
      })
    case "REQUEST_CREATE_TASK":
      return Object.assign({},state,{
        isFetching:true,
      })
    case "RECEIVE_CREATE_TASK":
      return Object.assign({},state,{
        isFetching:false,
        successMessage:true,
        status: action.status
      })
    default:
      return state
  }
}
