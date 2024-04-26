import RankContainer from "./RankContainer";
import "./style.css";
import Health from "./Health";
import { useState } from "react";
import Back from "./Back";

const Tekken = () => {
  const ranks = ["Bronze", "Silver", "Gold", "Platinum", "Diamond"];
  const [selectedRank, setSelectedRank] = useState(null);
  const [answer, setAnswer] = useState("Diamond");

  const handleSelectRank = (selectedRank) => {
    setSelectedRank(selectedRank);
    console.log("Selected Rank:", selectedRank);
    // Add logic for submitting/guessing the selected rank
  };

  const handleSubmit = () => {
    if (selectedRank === answer) {
      alert("good job 💯");
    } else if (selectedRank !== answer) {
      alert("naw that aint it dawg 😂");
    }
  };

  return (
    <div>
      <Back />
      <Health />
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zSiOa6f2jG8?si=C7vdb4a8KysLjjaK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <RankContainer ranks={ranks} onSelectRank={handleSelectRank} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <button
          style={{ width: 80, height: 50, borderRadius: 20 }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Tekken;
