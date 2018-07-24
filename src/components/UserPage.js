import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: ''
    }
  }
  
  componentWillMount() {
    this.props.fetchUser();
  }

  changeInput = (e) => {
    let data = []
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      username: '',
      age: ''
    })
  }

  renderUsers = (users) => {
    return users.map(user => {
      return `name: ${user.username},age: ${user.age}`;
    })
  }

  render() {
    return (
      <div>
        <h1>List user</h1>
        <div>{ this.props.users ? this.renderUsers(this.props.users) : null}</div>
        <h1>add user</h1>
        <form>
          <input type="text" name="username" value={this.state.username} onChange={this.changeInput}/>
          <input type="text" name="age" value={this.state.age} onChange={this.changeInput}/>
          <button onClick={this.handleAddUser}>add</button>
        </form>
      </div>
    );
  }
}

export default UserPage;
