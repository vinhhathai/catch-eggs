import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./GameOver.module.scss";
import { Howl } from "howler";
import { useEffect } from "react";

const cx = classNames.bind(styles);
function GameOver() {
  const myScore = JSON.parse(localStorage.getItem("myScore"));
  //Handle sound of coin
  useEffect(() => {
    const sound = new Howl({
      src: require("../../assets/sound/gameover.mp3"),
    });
    sound.play();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("score")}>
        <h1>Score: {myScore}</h1>
      </div>
      <h1 className={cx("game-over-text")}>Game over!</h1>
      <div className={cx("btn")}>
        <Link to="/">
          {" "}
          <button className={cx("back-btn")}>
            {" "}
            <i class="fas fa-home"></i> Home
          </button>{" "}
        </Link>
        <Link to="/playing">
          {" "}
          <button className={cx("back-btn")}>
            <i class="fas fa-undo-alt"></i> Play again
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
