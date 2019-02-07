import { connect } from 'react-redux'
import TasksListView from '../components/TasksListView'
import {fetchTasks, updateTask} from '../actions'

const mapStateToProps = state => ({
  isFetching: state.tasks.isFetching,
  tasks: state.tasks.items,
  page: state.tasks.page,
  maxPage: Math.ceil(state.tasks.totalTasksCount/3),
  isAuthentificated: state.tasks.isAuthentificated,
  sortBy: state.tasks.sortBy,
  order: state.tasks.order
})

const mapDispatchToProps = dispatch => ({
  fetchTasks : (page,sortBy,order) => dispatch(fetchTasks(page,sortBy,order)),
  //redo updateTask to not consume page,sortBy and order params by adding actions 
  updateTask : (task,page,sortBy,order) => dispatch(updateTask(task,page,sortBy,order))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListView)
