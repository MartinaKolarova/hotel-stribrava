import './style.css';

export const Room = ({ value, name, price, image, onSelect }) => {
  return (
    <div className="room--card" onClick={() => onSelect(value)}>
      <div className="card--image">
        <img src={image} alt={image} />
      </div>
      <div className="card--content">
        <h2>{name}</h2>
        <p>{price} kč na osobu</p>
      </div>
    </div>
  );
};
