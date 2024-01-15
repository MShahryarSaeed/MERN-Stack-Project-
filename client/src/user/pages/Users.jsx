import React from 'react';
// Components
import UsersList from '../components/UsersList';

// DUMMY Data  Array of Objects
const USERS = [
  {
    id: "u1",
    name: "Shahryar Saeed",
    places: 3,
    image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",

  },
  {
    id: "u2",
    name: "Shahraz Saeed",
    places: 2,
    image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
  },
  {
    id: "u3",
    name: "Fahad Saeed",
    places: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&usqp=CAU",
  },
  {
    id: "u4",
    name: "Ahmad",
    places: 3,
    image: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
  },
];
// const USERS=[];

const Users = () => {

  return (
    <UsersList items={USERS} />
  )
}

export default Users;
