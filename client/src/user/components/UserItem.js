import React from 'react';
import './UserItem.css';
import { Link } from 'react-router-dom';
// Components
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserItem = (props) => {
  return (

    <li className='user-item'>

      
        <Card className="user-item__contents">
          
        <Link to={`/${props.id}/places`}>

          <div className='user-item_image'>
            <Avatar image={props.image} alt={props.name}/>
          </div>

          <div className="user-item__info">

            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>

          </div>

        </Link>

        </Card>

      

    </li>
  )
}

export default UserItem
