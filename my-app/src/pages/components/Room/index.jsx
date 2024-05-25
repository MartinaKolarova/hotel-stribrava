import './style.css';

export const Room = ({ value, name, price, image, onClick }) => {
  return (
    <div className="room--card" onClick={() => onClick(value)}>
      <div className="card--image">
        <img src={image} alt={image} />
      </div>
      <div className="card--content">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};
