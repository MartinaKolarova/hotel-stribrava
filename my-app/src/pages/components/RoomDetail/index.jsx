export const RoomDetail = ({ name, price, image, info }) => {
  return (
    <div className="detail--conteiner">
      <h2>
        Pokoj {name}, {price} kč na osobu za noc
      </h2>
      <img src={image} alt={image} />
      <p>{info}</p>
    </div>
  );
};
