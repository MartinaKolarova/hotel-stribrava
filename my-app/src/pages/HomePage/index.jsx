import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RoomsList } from '../components/RoomsList';
import './style.css';

export const HomePage = () => {
  return (
    <div className="main">
      <Header />
      <RoomsList />
      <Footer />
    </div>
  );
};
