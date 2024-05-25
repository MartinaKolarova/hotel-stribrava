import "./style.css";
import mapaSrc from "./mapa.png";
export const Footer = () => {
  return (
    <div className="footer--container">
      <div className="contact">
        <h2>Kontakt</h2>
        <p>
          Hotel Stříbrava <br />
          Ke Kamenné lávce 12
          <br />
          217 24 Libnice nad Stříbravou
          <br />
          <br />
          <a href="mailto:recepce@hotelstribrava.cz">
            recepce@hotelstribrava.cz
          </a>
        </p>
      </div>
      <img className="footer--image" src={mapaSrc} alt="Mapa" />
    </div>
  );
};
