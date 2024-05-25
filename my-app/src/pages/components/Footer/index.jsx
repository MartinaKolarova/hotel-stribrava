import mapaSrc from './mapa.png';
export const Footer = () => {
  return (
    <div className="footer--container">
      <div className="Contact">
        <h2>Kontakt</h2>
        <ul>
          <li>Hotel Stříbrava</li>
          <li>Ke Kamenné lávce 12 </li>
          <li>217 24 Libnice nad Stříbravou</li>
          <br />
          <li>
            <a href="mailto:recepce@hotelstribrava.cz">
              recepce@hotelstribrava.cz
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img className="footer--image" src={mapaSrc} alt="Mapa" />
      </div>
    </div>
  );
};
