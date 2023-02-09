import classNames from "classnames/bind";
import styles from "./Scoreboard.module.scss";

const cx = classNames.bind(styles);
function Scoreboard({ score }) {
  return (
    <>
      <img
        src={require("../../assets/score/scoreboard.png")}
        alt="error"
        className={cx("score-board")}
      />
      <h4 className={cx("score-number")}>Score: {score}</h4>
    </>
  );
}

export default Scoreboard;
