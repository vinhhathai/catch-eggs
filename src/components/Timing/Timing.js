import classNames from "classnames/bind";
import styles from "./Timing.module.scss";
import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const cx = classNames.bind(styles);
function Timing() {
  const [seconds, setSeconds] = useState(3);
  const sound = new Howl({
    src: require("../../assets/sound/time.mp3"),
  });
  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 3) {
      sound.play();
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div className={cx("seconds-number")}>
      {seconds === 0 ? <p style={{ fontSize: 1000 }}>START</p> : seconds}
    </div>
  );
}
export default Timing;
