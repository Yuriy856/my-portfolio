import Tooltip from "./Tooltip/Tooltip";

// SVG IMPORT ================================================================
import HtmlIcon from "/src/assets/icons/html.svg?react";
import CssIcon from "/src/assets/icons/css.svg?react";
import JsIcon from "/src/assets/icons/js.svg?react";
import ReactIcon from "/src/assets/icons/react.svg?react";
import FigmaIcon from "/src/assets/icons/figma.svg?react";
import SassIcon from "/src/assets/icons/sass.svg?react";
import GitIcon from "/src/assets/icons/git.svg?react";
import TypeScriptIcon from "/src/assets/icons/typescript.svg?react";
// SVG Atribute
// fill="current" stroke="none"
// ===========================================================================

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="title-block">
        <h1 className="portfolio-title">My Skills</h1>
      </div>
      <ul className="skills-list">
        <Tooltip text={`Html 5`} id={"html"}>
          <li className="skill-item">
            <HtmlIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"Css 3"} id={"css"}>
          <li className="skill-item">
            <CssIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"Sass"} id={"scss"}>
          <li className="skill-item">
            <SassIcon className="skill-icon" />
          </li>
        </Tooltip>

        <Tooltip text={"JavaScript"} id={"js"}>
          <li className="skill-item">
            <JsIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"React"} id="react">
          <li className="skill-item">
            <ReactIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"Figma"} id={"figma"}>
          <li className="skill-item">
            <FigmaIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"Git"} id={"git"}>
          <li className="skill-item">
            <GitIcon className="skill-icon" />
          </li>
        </Tooltip>
        <Tooltip text={"TypeScript"} id={"typescript"}>
          <li className="skill-item">
            <TypeScriptIcon className="skill-icon" />
          </li>
        </Tooltip>
      </ul>
    </div>
  );
}
