import "./style.css";
import CardRow from "./CardRow";
import logo from "./img/logo.png";
import Countdown from "./Countdown";
const Home = () => {
  return (
    <body>
      <img src={logo} className="title" alt="Logo"></img>
      <Countdown />
      <CardRow />
    </body>
  );
};

export default Home;
