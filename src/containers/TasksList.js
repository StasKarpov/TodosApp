import { connect } from 'react-redux'
import TasksListView from '../components/TasksListView'
import {fetchTasks, updateTask} from '../actions'

const mapStateToProps = state => ({
  isFetching: state.tasks.isFetching,
  tasks: state.tasks.items,
  page: state.tasks.page,
  maxPage: Math.ceil(state.tasks.totalTasksCount/3),
  isAuthentificated: state.tasks.isAuthentificated
})

const mapDispatchToProps = dispatch => ({
  fetchTasks : page => dispatch(fetchTasks(page)),
  updateTask : task => dispatch(updateTask(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListView)
