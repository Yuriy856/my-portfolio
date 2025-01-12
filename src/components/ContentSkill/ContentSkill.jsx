import { motion } from "motion/react";
import "./ContentSkill.scss";

import { contentSkills } from "../../utils/ContentSkills";

export default function ContentSkill(props) {
  const { idContent } = props;

  let [contentText] = contentSkills.filter(
    (content) => content.id === idContent
  );

  if (contentText) {
    contentText = contentText.text;
  }

  return (
    <div className="content-skill-container">
      <div className="content-line"></div>
      <motion.p
        className={`content-text`}
        key={idContent}
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {contentText}
      </motion.p>
    </div>
  );
}
