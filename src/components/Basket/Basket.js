import classNames from "classnames/bind";
import styles from "./Basket.module.scss";
import Draggable from "react-draggable";

const cx = classNames.bind(styles);
function Basket({ basketRef }) {
  return (
    <div className={cx("basket-line")}>
      {" "}
      <Draggable bounds={{ top: 0, left: -450, right: 450, bottom: 0 }}>
        <span className={cx("basket-block")}>
          <img
            draggable="false"
            alt="error"
            src={require("../../assets/basket/basket.png")}
            className={cx("basket-object")}
          />
          <div className={cx("basket-get-egg")} ref={basketRef}></div>
        </span>
      </Draggable>
    </div>
  );
}

export default Basket;
