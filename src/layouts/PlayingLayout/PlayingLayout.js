import classNames from "classnames/bind";
import styles from "./PlayingLayout.module.scss";
import { createRef, useEffect } from "react";
import { useState } from "react";
import { Howl } from "howler";
import { useNavigate } from "react-router";

import Chicken from "../../components/Chicken/Chicken";
import Rope from "../../components/Rope/Rope";
import Basket from "../../components/Basket/Basket";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import Crown from "../../components/Crown/Crown";
import Timing from "../../components/Timing/Timing";

const cx = classNames.bind(styles);

function PlayingLayout() {
  const chicken = [
    {
      id: 0,
      chicken1: require("../../assets/chicken/chicken.png"),
      chicken2: require("../../assets/chicken/chicken2.png"),
      egg: require("../../assets/egg/egg.png"),
      brokenegg: require("../../assets/egg/brokenegg.png"),
      shit: require("../../assets/shit/shit.png"),
      audio: require("../../assets/sound/chicken.mp3"),
    },
    {
      id: 1,
      chicken1: require("../../assets/chicken/chicken.png"),
      chicken2: require("../../assets/chicken/chicken2.png"),
      egg: require("../../assets/egg/egg.png"),
      brokenegg: require("../../assets/egg/brokenegg.png"),
      shit: require("../../assets/shit/shit.png"),
      audio: require("../../assets/sound/chicken.mp3"),
    },
    {
      id: 2,
      chicken1: require("../../assets/chicken/chicken.png"),
      chicken2: require("../../assets/chicken/chicken2.png"),
      egg: require("../../assets/egg/egg.png"),
      brokenegg: require("../../assets/egg/brokenegg.png"),
      shit: require("../../assets/shit/shit.png"),
      audio: require("../../assets/sound/chicken.mp3"),
    },
    {
      id: 3,
      chicken1: require("../../assets/chicken/chicken.png"),
      chicken2: require("../../assets/chicken/chicken2.png"),
      egg: require("../../assets/egg/egg.png"),
      brokenegg: require("../../assets/egg/brokenegg.png"),
      shit: require("../../assets/shit/shit.png"),
      audio: require("../../assets/sound/chicken.mp3"),
    },
    {
      id: 4,
      chicken1: require("../../assets/chicken/chicken.png"),
      chicken2: require("../../assets/chicken/chicken2.png"),
      egg: require("../../assets/egg/egg.png"),
      brokenegg: require("../../assets/egg/brokenegg.png"),
      shit: require("../../assets/shit/shit.png"),
      audio: require("../../assets/sound/chicken.mp3"),
    },
  ];

  /*-----------------Handle Events----------------*/
  const [eggPosition, setEggPosition] = useState(0);
  const [random, setRandom] = useState(2);
  const [collision, setCollision] = useState(false);
  const [score, setScore] = useState(0);
  const [coinSound, setCoinSound] = useState(false);
  const [brokenScore, setBrokenScore] = useState(0);
  const [increased, setIncreased] = useState(false);
  const [lengthCrown, setLengthCrown] = useState(5);
  const navigate = useNavigate();

  //Handle falling eggs
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const time = setTimeout(() => {
      setPlay(true);
    }, 3000);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    let animationFrameId;
    if (play) {
      if (eggPosition < 900) {
        animationFrameId = requestAnimationFrame(() => {
          setEggPosition(eggPosition + 15);
        });
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [play, eggPosition]);

  //Handle collision
  const basketRef = createRef();
  const eggBlockRef = createRef();
  useEffect(() => {
    const basket = basketRef.current;
    const eggBlock = eggBlockRef.current;
    if (basket && eggBlock) {
      const basketRect = basket.getBoundingClientRect();
      const eggBlockRect = eggBlock.getBoundingClientRect();
      if (
        basketRect.x < eggBlockRect.x + eggBlockRect.width &&
        basketRect.x + basketRect.width > eggBlockRect.x &&
        basketRect.y < eggBlockRect.y + eggBlockRect.height &&
        basketRect.height + basketRect.y > eggBlockRect.y
      ) {
        setCollision(true);
        setCoinSound(true);
        setScore((prev) => prev + 1);
      }
    }
  }, [basketRef, eggPosition, eggBlockRef]);

  //Handle eggs when touching on the ground
  useEffect(() => {
    if (eggPosition === 900) {
      const myInterval = setInterval(() => {
        setEggPosition(0);
        setCollision(false);
        setCoinSound(false);
        setRandom(Math.floor(Math.random() * 5));
        clearInterval(myInterval);
      }, 1000);
    }
  }, [eggPosition]);

  //Handle sound of coin
  useEffect(() => {
    const sound = new Howl({
      src: require("../../assets/sound/coin.mp3"),
    });

    if (coinSound) {
      sound.play();
      setCoinSound(false);
    }
  }, [coinSound]);

  //Handle score of broken eggs

  useEffect(() => {
    if (collision === false && eggPosition === 900 && !increased) {
      setBrokenScore((prev) => prev + 1);
      setIncreased(true);
    }
    if (collision === true || eggPosition !== 900) {
      setIncreased(false);
    }
  }, [collision, eggPosition]);

  //Handle crown number
  let crown = [];
  for (var i = 1; i <= lengthCrown; i++) {
    crown.push(<Crown key={i} />);
  }
  useEffect(() => {
    if (lengthCrown > 0) {
      setLengthCrown((prev) => prev - 1);
    } else {
      navigate("/gameover");
    }
  }, [brokenScore]);
  localStorage.setItem("myScore", JSON.stringify(score));

  /*-----------------------------------------------*/
  return (
    <div className={cx("wrapper")}>
      {play === false && <Timing />}
      <audio
        autoPlay
        loop
        src={require("../../assets/sound/background.mp3")}
      ></audio>
      {chicken.map((item, index) => {
        return (
          <Chicken
            item={item}
            index={index}
            random={random}
            eggBlockRef={eggBlockRef}
            eggPosition={eggPosition}
            collision={collision}
            key={index}
          />
        );
      })}
      <Rope />
      <Scoreboard score={score} />
      <Basket basketRef={basketRef} />
      <div className={cx("crown-block")}>{crown}</div>
    </div>
  );
}

export default PlayingLayout;
