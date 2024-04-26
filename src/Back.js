import { Link } from "react-router-dom";
import './style.css';
const Back = () => {
  return (
    <ul>
      <Link to="/">
        <li class="prev">
          <span></span>
        </li>
      </Link>
    </ul>
  );
};

export default Back;
