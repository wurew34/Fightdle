import Card from "./Card";
import "./style.css";
import tekkenIcon from "./img/tekken8.jpg";
import streetIcon from "./img/streetfighter.jpg";
import fighterzIcon from "./img/dbfz.jpg";
import meleeIcon from "./img/melee.jpg";

const CardRow = () => {
  return (
    <div className="card-row">
      <Card title="Tekken 8" link="/tk8" image={tekkenIcon} />
      <Card title="Street Fighter 6" link="/sf6" image={streetIcon} />
      <Card title="Super Smash Brothers Melee" link="melee" image={meleeIcon} />
      <Card title="Dragon Ball FighterZ" link="dbfz" image={fighterzIcon} />
    </div>
  );
};

export default CardRow;
