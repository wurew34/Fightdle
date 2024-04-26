import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ link, image }) => {
  return (
    <div>
      <Link to={link}>
        <div className="animated_card">
          <img src={image} alt="tekken"></img>
        </div>
      </Link>
    </div>
  );
};

export default Card;
