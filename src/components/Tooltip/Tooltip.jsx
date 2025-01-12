import { useState, useEffect, useContext } from "react";
import "./Tooltip.scss";

import { СontentSkillContext } from "../ContentSkillContext";

export default function Tooltip(props) {
  const { text, id, children } = props;

  const content = useContext(СontentSkillContext);
  const { setIdContent } = content;

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    console.log(showTooltip);
  }, [showTooltip]);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => {
        setShowTooltip(true);
        setIdContent(id);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
    >
      {children}
      <div className={`tooltip ${showTooltip ? "open" : ""}`}>
        <p className="tooltip-content">{text}</p>
      </div>
    </div>
  );
}
