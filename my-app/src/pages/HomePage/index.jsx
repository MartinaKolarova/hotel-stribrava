import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RoomsList } from '../components/RoomsList';
import { useEffect, useState } from 'react';
import './style.css';
import { RoomDetail } from '../components/RoomDetail';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
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

  const detail = rooms.find((room) => room.id === selected);

  console.log(detail);

  return (
    <div className="main">
      <Header />
      <RoomsList rooms={rooms} selectedId={selected} onSelect={handleSelect} />
      {detail !== undefined && (
        <RoomDetail
          name={detail.name}
          price={detail.price}
          info={detail.info}
          image={`http://ocalhost:4000/assets/${detail.image}`}
        />
      )}
      <Footer />
    </div>
  );
};
