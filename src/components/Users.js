import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Users extends Component {
  render() {
    let { users } = this.props.store;
    return (
      <ul>
        {users.map(user => <div key={user.id}>{user.name} - {user.email}</div>)}
      </ul>
    );
  }
}

export default Users;
