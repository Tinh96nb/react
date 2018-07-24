import { connect } from 'react-redux';
import UserPage from '../components/UserPage';
import { fetchUser, addUser } from '../reducers/user-reducer';

const mapStateToProps = (state) => {
  // list state get from index reducer
  return {
    users: state.users.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    addUser: (data) => dispatch(addUser(data))
  }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage)