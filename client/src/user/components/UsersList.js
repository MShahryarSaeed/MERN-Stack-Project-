import React from 'react';
import './UsersList.css';

// components
import UserItem from './UserItem';


const UsersList = (props) => {

  // if there is no user then this Return code will executed
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No Users Found</h2>
      </div>
    )
  }

  // If atleast one user Present then this Return code will executed
  return (
    <ul className='users-list'>

      {props.items.map((user, index) => (

       <UserItem key={index} id={user.id} name={user.name} image={user.image} placeCount={user.places} />

      ))}

    </ul>
  )
}

export default UsersList;
