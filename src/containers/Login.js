import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import {handleLogin} from '../actions'

const mapStateToProps = state => ({
  isAuthentificated : state.tasks.isAuthentificated,
  loginFailed: state.tasks.loginFailed
})


const mapDispatchToProps = dispatch => ({
  login : credentials => dispatch(handleLogin(credentials)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
