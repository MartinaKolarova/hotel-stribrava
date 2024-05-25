import { useEffect, useState } from 'react';
import { Room } from '../Room';
import './style.css';
import { RoomDetail } from '../RoomDetail';

export const RoomsList = ({ rooms, selectedId, onSelect }) => {
  return (
    <div className="rooms--container">
      <div className="rooms--content">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
      </div>
      <div className="rooms--list">
        {rooms.map((room) => (
          <Room
            key={room.id}
            value={room.id}
            name={room.name}
            price={room.price}
            image={`http://ocalhost:4000/assets/${room.image}`}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};
