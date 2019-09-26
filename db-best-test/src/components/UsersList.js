import React from 'react';
// import { Table } from 'reactstrap';
import UserItem from './UserItem';
import './UsersList.css';



function UsersList(props) {
  const usersList = props.usersList.map(user =>
    <UserItem {...user} key={user.id} />);
  return (
    <>
      <table>
        <thead>
        <tr>
        <th>Cat's foto</th>
        <th>Cat's name</th>
        <th>Show me Cat's id</th>
        </tr>
        </thead>
        <tbody>
          {usersList}
        </tbody>
      </table>

    </>
  );
}

export default UsersList;
