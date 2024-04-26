import { useState } from "react";
import "./style.css";

const RankContainer = ({ ranks, onSelectRank }) => {
  const [selectedRank, setSelectedRank] = useState(null);

  const handleRankClick = (rank) => {
    if (selectedRank === rank) {
      setSelectedRank(null); // Deselect if already selected
    } else {
      setSelectedRank(rank);
      onSelectRank(rank); // Pass selected rank to parent component
    }
  };

  return (
    <div className="rank-container">
      <h2 className="name">Select a Rank to Submit/Guess</h2>
      <div className="rank-list">
        {ranks.map((rank, index) => (
          <div
            key={index}
            className={`rank-item ${selectedRank === rank ? "selected" : ""}`}
            onClick={() => handleRankClick(rank)}
          >
            <button>{rank}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankContainer;
