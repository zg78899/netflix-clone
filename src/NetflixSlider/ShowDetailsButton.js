import React from "react";
import IconArrowDown from "../icons/iconArrowDown";
import "./ShowDetailsButton.scss";

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
