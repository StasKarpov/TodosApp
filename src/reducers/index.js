
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
      return {
        isFetching:true,
        page:action.page,
        items:[],
        totalTasksCount:0
      }
    case "RECEIVE_TASKS":
      return {
        isFetching:false,
        page:action.page,
        totalTasksCount: action.json.message.total_task_count,
        items: action.json.message.tasks,
      }
    case "REQUEST_CREATE_TASK":
      return {
        isFetching:true,
      }
    case "RECEIVE_CREATE_TASK":
      return {
        isFetching:false,
        successMessage:true,
        status: action.status
      }
    default:
      return state
  }
}
