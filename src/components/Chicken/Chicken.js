import classNames from "classnames/bind";
import styles from "./Chicken.module.scss";

const cx = classNames.bind(styles);
function Chicken({ item, random, collision, eggBlockRef, eggPosition }) {
  return (
    <span>
      <span className={cx("chicken-block")}>
        <img
          alt="error"
          className={cx("chicken")}
          src={item.id === random ? item.chicken2 : item.chicken1}
          draggable="false"
        />
        {item.id === random && collision === false ? (
          <div
            ref={eggBlockRef}
            className={cx("egg-block")}
            style={{ transform: `translateY(${eggPosition}%)` }}
          >
            <audio
              autoPlay={true}
              src={require("../../assets/sound/chicken.mp3")}
            ></audio>
            {eggPosition === 900 ? (
              <>
                <audio
                  autoPlay={true}
                  src={require("../../assets/sound/slap.mp3")}
                ></audio>
              </>
            ) : null}

            <img
              src={
                collision === false && eggPosition !== 900
                  ? item.egg
                  : item.brokenegg
              }
              className={cx("egg-object")}
              alt="erroe"
            />
          </div>
        ) : null}
      </span>
    </span>
  );
}

export default Chicken;
