export const ReservationForm = () => {
  return (
    <form onSubmit={'Úspěšně odesláno'} className="form">
      <label for="from">Od:</label>
      <input type="date" id="from" /> <br />
      <label for="to">Do:</label>
      <input type="date" id="to" /> <br />
      <label for="people">Počet osob:</label>
      <input type="number" id="people" /> <br />
      <label for="board">Stravování:</label>
      <select id="board">
        <option value="choose">Vybrat</option>
        <option value="breakfast">Snídaně</option>
        <option value="half-board">Polopenze</option>
        <option value="full-board">Plná penze</option>
      </select>
      <br />
      <label for="pet">Domácí mazlíček: </label>
      <input type="checkbox" id="pet" /> <br />
      <label for="extra-bed">Přistýlka pro dítě: </label>
      <input type="checkbox" id="extra-bed" /> <br />
      <label for="barier-free">Bezbariérový přístup:</label>
      <input type="checkbox" id="barier-free" /> <br />
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" /> <br />
      <label for="phone">Telefon: </label>
      <input type="tel" id="phone" /> <br />
      <button>Odeslat poptávku</button>
      <h2>Celková cena za pobyt {}</h2>
    </form>
  );
};
