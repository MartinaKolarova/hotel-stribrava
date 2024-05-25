import { useEffect, useState } from 'react';
import { Room } from '../Room';
import './style.css';

export const RoomsList = () => {
  const [selected, setSelected] = useState(null);
  const [rooms, setRooms] = useState([]);

  const handleClick = (value) => {
    setSelected(value);
    console.log(value);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const json = await response.json();
      setRooms(json.data);
    };

    fetchRooms();
  }, []);

  if (rooms === null) {
    return <p>Loading...</p>;
  }
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
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
