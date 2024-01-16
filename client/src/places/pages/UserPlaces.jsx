import React from 'react';
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';

// Array of Objects...
const DUMMY_PLACES = [
  
  {
    id: "p1",
    title: "BadShahi Mosque",
    description: "Famous Mosque in Lahore",
    imageUrl: "https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=",
    address: "Jinnah Park Lahore",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "University of Sahiwal",
    description: "A Public Sector university in Sahiwal",
    imageUrl: "https://d39tfzr0b34y81.cloudfront.net/media/uni_profile_img/uos_sahiwal_bg.jpg",
    address: "Farid Town Sahiwal",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "University of Sahiwal",
    description: "A Public Sector university in Sahiwal",
    imageUrl: "https://d39tfzr0b34y81.cloudfront.net/media/uni_profile_img/uos_sahiwal_bg.jpg",
    address: "Farid Town Sahiwal",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {

  const{userId}=useParams();

  const loadedPlaces=DUMMY_PLACES.filter(
    (places)=>places.creator===userId
  );

  return (
     <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces;
