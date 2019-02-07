import { connect } from 'react-redux'
import CreateTaskView from '../components/CreateTaskView'
import {createTask} from '../actions'

const mapStateToProps = state => ({
  isFetching: state.tasks.isFetching,
  successMessage: state.tasks.successMessage,
  status: state.tasks.status
})

const mapDispatchToProps = dispatch => ({
  createTask : task => dispatch(createTask(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskView)
